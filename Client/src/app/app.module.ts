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
import {AuthService} from './auth.service';

import{MatSliderModule} from '@angular/material/slider'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CallbackComponent } from './callback/callback.component';


const config = {
  issuer: 'https://dev-395608.okta.com/oauth2/default',
  redirectUri: 'https://stupefied-johnson-b7f9ec.netlify.com/implicit/callback',
  clientId: '0oa1qbis5wVnqY3da357',
  pkce: true,
  scopes:['openid','profile','email'],
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageListComponent,
    LoginComponent,
    ArticleComponent,
    ArticleListItemComponent,
    CreateArticleComponent,
    CallbackComponent,    
  ],


  imports: [  
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.initAuth(config),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule
  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
