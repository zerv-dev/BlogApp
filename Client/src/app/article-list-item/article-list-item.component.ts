import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Article, User} from './../interfaces'
import {UserService} from './../services/user.service'
import { OktaAuthService } from '@okta/okta-angular';
import { ArticleService } from '../services/article.service';
@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  currentUser:User
  @Input() article: Article ;
  constructor( public router:Router,public userService:UserService, public oktaAuth:OktaAuthService,public articleService:ArticleService ) {}

  ngOnInit() {
  }
  deleteArticle(){
    this.router.navigateByUrl('/confirm-delete/'+ this.article.id)
    
  }
}
