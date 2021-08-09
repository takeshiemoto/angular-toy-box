import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
