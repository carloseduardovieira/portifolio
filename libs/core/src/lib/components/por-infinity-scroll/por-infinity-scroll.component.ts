import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-por-infinity-scroll',
  template: '',
  providers: [],
})
export abstract class PorInfinityScrollComponent {
  @Input() public infiniteScrollDistance = 1;
  @Input() public infiniteScrollThrottle = 300;

  public term = '';
  public page = 0;
  public totalItems = 1000;

  protected abstract countLoadedItems(): number;
  protected abstract loadItems(term: string): void;

  public onScrollDown(): void {
    const loadedItems = this.countLoadedItems();

    if (loadedItems < this.totalItems) {
      this.page += 1;
    }

    this.loadItems(this.term);
  }

  public resetScrollInfo(): void {
    this.term = '';
    this.page = 0;
    this.totalItems = 1;
  }
}
