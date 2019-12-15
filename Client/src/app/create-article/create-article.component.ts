import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import{AuthService} from './../auth.service'
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
  user:any;
  constructor(private http:HttpClient, private oktaAuth:OktaAuthService ,private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  async submit(){
    //pass in header
    const accessToken = await  this.authService.getAccessToken();  //this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
    this.http.post<any>('https://localhost:5001/api/article',{
      "Title": this.title,
      "UserId": this.user.Id,
      "Content": this.content
  },{headers}).
  subscribe(
    response=>this.router.navigate(['/'])
  )
  }


}
