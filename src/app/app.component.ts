import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, MatListModule],
  selector: 'vsm-root',
  template: `
    <mat-drawer-container class="application-container" autosize>
      <mat-drawer
        #drawer
        class="application-container__sidenav"
        mode="side"
        opened
      >
        Application modules

        <mat-list role="list">
          <mat-list-item role="listitem" (click)="navigateTo('map')"
            >MAP</mat-list-item
          >
          <mat-list-item role="listitem" (click)="navigateTo('users')"
            >Users</mat-list-item
          >
        </mat-list>
      </mat-drawer>

      <router-outlet></router-outlet>
    </mat-drawer-container>
  `,
  styles: `
  .application-container {
    width: 100%;
    height: 100%;

    &__sidenav {
      padding: 20px;
    }

    &__sidenav-content {
      height: 100%;
      width: 100%
    }
  }
  `,
})
export class AppComponent {
  title = 'cvieira-portifolio';
  showFiller = false;

  constructor(private router: Router) {}

  navigateTo(target: string): void {
    this.router.navigate([target]);
  }
}
