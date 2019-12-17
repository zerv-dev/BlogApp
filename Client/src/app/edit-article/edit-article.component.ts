import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Article } from "./../interfaces";
import { environment } from "./../../environments/environment";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  title:string;
  content:string;
  user:any;
  article:Article;
  id:number;
  constructor(private http:HttpClient, private oktaAuth:OktaAuthService , private route:ActivatedRoute, private router:Router, private articleService:ArticleService, private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params=> this.id= params.id);
      this.http.get<Article>(environment.apiUrl+'article/'+ this.id).subscribe(
        result=>{
          this.article =  result;
        }
      )
  }

  async submit(){

    let userId = this.userService.user.id
    this.articleService.editArticle(userId,this.article).then((success)=>{
      success.subscribe(article=>{
        this.router.navigate(['/'])
      })
    })
  }
}
