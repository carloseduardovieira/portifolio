import { UsersService } from './../../../shared/services/users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserListControllerService {
  constructor(private usersService: UsersService) {}
}
