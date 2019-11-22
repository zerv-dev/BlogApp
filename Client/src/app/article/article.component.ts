import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from "@angular/router";
import {HttpClient } from "@angular/common/http";
interface Article{
	id:Number;
    title: String;
	authorId:Number;
	content:String
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http:HttpClient) { }
    id:number;
    article:Article;
    ngOnInit() {
      this.route.params.subscribe(params=> this.id= params.id);
      this.http.get<Article>('https://localhost:5001/api/article/'+ this.id).subscribe(
        result=>{
          this.article =  result;
        }
      )

  }

}
