import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../../../shared';

@Component({
  selector: 'por-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss'],
})
export class GithubUserComponent implements OnInit {
  public user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.initUserDetail();
  }

  private initUserDetail(): void {
    const username = this.route.snapshot.params['username'];

    this.userService.findById(username).subscribe({
      next: (user: User) => {
        this.user = user;
      },
    });
  }
}
