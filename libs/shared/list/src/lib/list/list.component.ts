import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import { SearchInputManagementInterface } from './interfaces';

interface IList {
  [key: string]: string | undefined;
}

@Component({
  selector: 'por-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<M extends IList> implements OnInit, OnDestroy {
  private filterString: Subject<string> = new Subject<string>();

  public itemList: M[] = [];
  public bindLabel: string;

  private subscriptions = new Subscription();

  constructor(
    @Inject('SearchInputManagementInterface')
    private management: SearchInputManagementInterface<M>,
    private cd: ChangeDetectorRef
  ) {
    this.bindLabel = this.management.bindLabel as string;
  }

  ngOnInit(): void {
    this.initUserList('carloseduardov');
    this.watchTextInputChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public eventHandler = (event: { target: { value: string } }) => {
    this.filterString.next(event.target.value);
  };

  private watchTextInputChanges(): void {
    this.filterString
      .pipe(
        debounceTime(300),
        map((e) => e.trim()),
        distinctUntilChanged(),
        switchMap((term) => {
          return of(term);
        })
      )
      .subscribe((term: string) => term && this.initUserList(term));
  }

  private initUserList(term: string): void {
    this.management.loadItemsByTerm(term).subscribe({
      next: (items: M[]) => {
        this.itemList = items;
        this.cd.markForCheck();
      },
    });
  }
}
