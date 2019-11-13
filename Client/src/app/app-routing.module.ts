import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from "@okta/okta-angular";

import {HomeComponent} from './home/home.component'
import { MessageListComponent } from "./messagelist/messagelist.component";
import {ArticleComponent} from './article/article.component'

import {LoginComponent} from './login/login.component'
const routes: Routes = [{
  path: 'implicit/callback',
  component: OktaCallbackComponent
},
{
  path:'',
  component:HomeComponent
},
{
  path:'messages',
  component:MessageListComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'article/:id',
  component:ArticleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
