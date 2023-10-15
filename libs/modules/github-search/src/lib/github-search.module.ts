import { UsersService } from './shared/services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchRoutingModule } from './github-search.routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListModule } from '@portifolio/list';

import { GithubSearchComponent } from './github-search/github-search.component';
import { UserListControllerService } from './github-search/services/user-list.controller.service';
import { SearchService } from './shared';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubUsersComponent } from './github-users/github-users.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'assets/i18n/translations/git/',
    '.json'
  );
}

@NgModule({
  imports: [
    CommonModule,
    GithubSearchRoutingModule,
    ListModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NbCardModule,
    NbIconModule,
    NbEvaIconsModule,
    NbListModule,
  ],
  declarations: [
    GithubSearchComponent,
    GithubUserComponent,
    GithubUsersComponent,
  ],
  providers: [UsersService, SearchService, UserListControllerService],
})
export class GithubSearchModule {}
