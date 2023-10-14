import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchRoutingModule } from './github-search.routing.module';
import { SearchInputModule } from '@portifolio/search-input';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
  ],
  declarations: [GithubSearchComponent],
})
export class GithubSearchModule {}
