import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessageListComponent } from './messagelist/messagelist.component';

import { OktaAuthModule } from "@okta/okta-angular";
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import{MatSliderModule} from '@angular/material/slider'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';


const config = {
  issuer: 'https://dev-395608.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa1qbis5wVnqY3da357',
  pkce: true
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageListComponent,
    LoginComponent,
    ArticleComponent,
    ArticleListItemComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
