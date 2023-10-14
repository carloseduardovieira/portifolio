import { Component } from '@angular/core';
import { User } from '../../../../shared';

@Component({
  selector: 'module-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public userList: User[] = [];
}
