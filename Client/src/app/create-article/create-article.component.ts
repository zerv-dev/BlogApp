import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import{AuthService} from '../services/auth.service'
import{UserService} from '../services/user.service'
import{ArticleService} from '../services/article.service'

import { environment } from "./../../environments/environment";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  title:string;
  content:string;
  user:any;
  constructor(private http:HttpClient, private oktaAuth:OktaAuthService ,private router:Router, private articleService:ArticleService, private authService:AuthService,private userService:UserService) { }

  ngOnInit() {
  }

  async submit(){

    let userId = this.userService.user.id
    this.articleService.createArticle(this.title,userId,this.content).then((success)=>{
      success.subscribe(article=>{
        this.router.navigate(['/'])
      })
    })
  }
    //pass in header
  //   const accessToken = await  this.authService.getAccessToken();  //this.oktaAuth.getAccessToken();
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + accessToken
  //   });
  //   this.user = this.userService.user;
  //   this.http.post<any>(environment.apiUrl+'article',{
  //     "Title": this.title,
  //     "UserId": this.user.id,
  //     "Content": this.content
  // },{headers}).
  // subscribe(
  //   response=>this.router.navigate(['/'])
  // )
  // }
  


}
