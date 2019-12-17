import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from "@okta/okta-angular";
import { HomeComponent } from './home/home.component'
import { ArticleComponent } from './article/article.component'
import { CreateArticleComponent } from './create-article/create-article.component';
import {  ProfileComponent} from "./profile/profile.component";
import {EditArticleComponent} from './edit-article/edit-article.component'
import { ConfirmDeleteComponent } from './services/confirm-delete/confirm-delete.component';

const routes: Routes = [{
	path: 'implicit/callback',
	component: OktaCallbackComponent
},
{
	path: '',
	component: HomeComponent
},
{
	path: 'article/:id',
	component: ArticleComponent
},
{
	path:'create-article',
	component:CreateArticleComponent,
	canActivate:[OktaAuthGuard]
},
{
	path:'profile/:id',
	component:ProfileComponent
},
{
	path:'edit-article/:id',
	component:EditArticleComponent,
	canActivate:[OktaAuthGuard]
},
{
	path:'confirm-delete/:id',
	component:ConfirmDeleteComponent,
	canActivate:[OktaAuthGuard]
},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
