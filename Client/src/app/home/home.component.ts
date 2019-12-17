import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from "./../../environments/environment";
import {UserService} from './../services/user.service';
import {ArticleService} from './../services/article.service';
import{User,Article} from './../interfaces'
interface ArticleListing {
	title: String;
	author: String;
	date: String;
	contentPreview: String,
	image:String
}

// interface Article{
// 	id:Number;
//     title: String;
// 	authorId:Number;
// 	content:String
// }
// interface User{
// 	Email:string,
// 	FirstName:string;
// 	LastName:string
  
//   }
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
	articles: Array<Article>;
	users :Array<User>;
	constructor(private http: HttpClient, private oktaAuth: OktaAuthService, private userService:UserService, private articleService:ArticleService) {

		this.articles =[]
		this.users = []
	}

	async ngOnInit() {
		const accessToken = await this.oktaAuth.getAccessToken();
		const headers = new HttpHeaders({
			Authorization: 'Bearer ' + accessToken
		  });
		this.articleService.getAllArticles().subscribe(result =>{
			this.articles = result
		  })
		  this.userService.getAllUsers().subscribe((result)=>{this.users = result})
	
	}

}
