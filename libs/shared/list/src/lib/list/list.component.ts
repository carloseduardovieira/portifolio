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
export class ListComponent<M extends IList> implements OnInit, OnDestroy {
  public termControl: FormControl;
  public bindLabel: string;
  public bindValue = 'id';

  public termValidator = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/;

  public itemList: M[] = [];

  private subscriptions = new Subscription();

  constructor(
    @Inject('SearchInputManagementInterface')
    private management: SearchInputManagementInterface<M>,
    private cd: ChangeDetectorRef,
    private customValidators: CustomValidators
  ) {
    this.bindLabel = this.management.bindLabel;

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
    this.initItemsList('carloseduardov');
    this.watchTextInputChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public trackBy(idx: number, item: M) {
    return item[this.bindValue];
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
      .subscribe((term: string) => term && this.initItemsList(term));
  }

  private initItemsList(term: string): void {
    this.management.loadItemsByTerm(term).subscribe({
      next: (items: M[]) => {
        this.itemList = items;
        this.cd.markForCheck();
      },
    });
  }
}
