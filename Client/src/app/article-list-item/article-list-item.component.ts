import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Article} from './../interfaces'
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
