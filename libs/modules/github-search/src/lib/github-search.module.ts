import { UsersService } from './shared/services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchRoutingModule } from './github-search.routing.module';
import { SearchInputModule } from '@portifolio/search-input';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { UserListComponent } from './github-search/shared/components/user-list/user-list.component';
import { NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UserListControllerService } from './github-search/shared/services';
import { SearchService } from './shared';

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
    SearchInputModule,
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
  declarations: [GithubSearchComponent, UserListComponent],
  providers: [UsersService, SearchService, UserListControllerService],
})
export class GithubSearchModule {}
