import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';

import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { stringOrNumberValidator } from '../../validators';
import { VsmListManagement } from './vsm-list-management.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'vsm-list',
  templateUrl: './vsm-list.component.html',
  styleUrls: ['./vsm-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    ScrollingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VsmListComponent<T> implements OnInit, OnDestroy {
  @ContentChild('listItem') listItem!: TemplateRef<{ item: T }>;

  @Output() itemClicked: EventEmitter<T> = new EventEmitter();

  itemList$: Subject<T[]> = new Subject();
  searchInputControl: FormControl = new FormControl('', [
    stringOrNumberValidator,
  ]);

  private subscriptions = new Subscription();

  constructor(
    @Inject('VsmListManagement')
    private listManagement: VsmListManagement<T>
  ) {}

  ngOnInit() {
    this.initItemList();
    this.watchSearchControlChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initItemList(): void {
    this.listManagement.getListItems().subscribe({
      next: (itemList: T[]) => {
        this.itemList$.next(itemList);
      },
    });
  }

  private watchSearchControlChanges(): void {
    this.subscriptions.add(
      this.searchInputControl.valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((queryString: string) => {
            if (this.searchInputControl.valid) {
              return this.listManagement.searchInItemList(
                queryString.toLocaleLowerCase()
              );
            }
            return of([]);
          })
        )
        .subscribe({
          next: (routeList: T[]) => {
            this.itemList$.next(routeList);
          },
        })
    );
  }
}
