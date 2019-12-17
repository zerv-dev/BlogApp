import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router} from "@angular/router";
import {HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import {Article} from './../interfaces'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http:HttpClient, public router:Router) { }
    id:number;
    article:Article;
    ngOnInit() {
      this.route.params.subscribe(params=> this.id= params.id);
      this.http.get<Article>(environment.apiUrl+'article/'+ this.id).subscribe(
        result=>{
          this.article =  result;
        }
      )

  }

}
