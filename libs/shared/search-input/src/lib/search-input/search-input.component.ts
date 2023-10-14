import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  private filterString: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.watchTextInputChanges();
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
          if (term && term.length > 3) {
            return of([]);
          }

          return of(term);
        })
      )
      .subscribe();
  }
}
