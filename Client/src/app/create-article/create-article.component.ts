import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  title:string;
  content:string;
  subtitle:string;
  authorId:number;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  submit(){
    this.http.post<any>('https://localhost:5001/api/article',{
      "title": this.title,
      "authorId": 1,
      "content": this.content
  }).subscribe(

    response=>console.log(response)
  )
  }


}
