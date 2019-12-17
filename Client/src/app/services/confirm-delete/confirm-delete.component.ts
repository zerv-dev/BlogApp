import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  id:number
  constructor(private articleService:ArticleService, private  router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id
    })
    this.articleService.deleteArticle(this.id).then(success=>{
      success.subscribe(article=>{
         this.router.navigateByUrl('/')
      })
    })
  }
 

}
