import { CustomValidators } from './../../../../../utils/custom-validators';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import { SearchInputManagementInterface } from './interfaces';
import { FormControl } from '@angular/forms';
import { PorInfinityScrollComponent } from '@portifolio/core';

interface IList {
  [key: string]: string | undefined;
}

@Component({
  selector: 'por-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CustomValidators],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<M extends IList>
  extends PorInfinityScrollComponent
  implements OnInit, OnDestroy
{
  public termControl: FormControl;
  public bindLabel: string;
  public bindValue = 'id';
  public placeholder: string;

  public termValidator = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/;

  public itemList: M[] = [];

  private subscriptions = new Subscription();

  constructor(
    @Inject('SearchInputManagementInterface')
    private management: SearchInputManagementInterface<M>,
    private cd: ChangeDetectorRef,
    private customValidators: CustomValidators
  ) {
    super();

    this.bindLabel = this.management.bindLabel;
    this.placeholder = this.management.placeholder;

    if (this.management.termValidator) {
      this.termValidator = this.management.termValidator;
    }

    if (this.management.bindValue) {
      this.bindValue = this.management.bindValue;
    }

    this.termControl = new FormControl('', [
      this.customValidators.controlValidator(this.termValidator),
    ]);
  }

  ngOnInit(): void {
    this.term = this.management.initialValue;
    this.loadItems(this.term);
    this.watchTextInputChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public countLoadedItems(): number {
    return this.itemList.length;
  }

  public trackByFn(bindValue: string, idx: number, item: M) {
    return item[bindValue];
  }

  public loadItems(term: string): void {
    this.management.loadItemsByTerm(term, this.page).subscribe({
      next: (items: M[]) => {
        this.itemList = items;
        this.cd.markForCheck();
      },
    });
  }

  private watchTextInputChanges(): void {
    this.termControl.valueChanges
      .pipe(
        debounceTime(300),
        map((e) => e.trim()),
        distinctUntilChanged(),
        switchMap((term) => {
          if (this.termControl.valid) {
            return of(term);
          }

          return of('');
        })
      )
      .subscribe((term: string) => {
        if (term) {
          this.resetScrollInfo();
          this.term = term;
          this.loadItems(term);
        }
      });
  }
}
