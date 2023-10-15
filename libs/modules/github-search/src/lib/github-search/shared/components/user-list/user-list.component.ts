import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../../shared';
import { UserListControllerService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'por-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public userList: User[] = [];

  private subscriptions = new Subscription();

  constructor(private userListCtrl: UserListControllerService) {}

  ngOnInit(): void {
    this.initUserList();
    this.watchUserListChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initUserList(): void {
    this.userListCtrl.searchQueryChanged('carloseduardov');
  }

  private watchUserListChanges(): void {
    this.subscriptions.add(
      this.userListCtrl.newItemsLoaded$.subscribe({
        next: (users: User[]) => {
          this.userList = users;
        },
      })
    );
  }
}
