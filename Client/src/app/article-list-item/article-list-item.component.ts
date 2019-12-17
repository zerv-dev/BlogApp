import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
interface Article{
	id:Number;
    title: String;
	author:any;
	content:String
}
@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: Article ;
  constructor( public router:Router) { }

  ngOnInit() {
  }

}
