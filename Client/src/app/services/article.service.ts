import { Injectable } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";
import {HttpClient, HttpClientModule, HttpParams, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'
import { Article } from "./../interfaces";
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles:Article[]
  constructor(public oktaAuth:OktaAuthService, private http: HttpClient) { }
  getAllArticles(){
    return this.http.get<Article[]>(
			environment.apiUrl+ 'article/',)//.subscribe(result =>{this.articles = result})
  }

  getArticleById(id:number){
    return this.http.get<Article>(environment.apiUrl+'article/'+id);
  }
  async createArticle(title:string,userId:number,content:string,){
    const accessToken =   await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
   return this.http.post<Article>(environment.apiUrl+'article',{
      "Title": title,
      "UserId": userId,
      "Content": content
  },{headers})
  }
  async editArticle(userId:number,article:Article,){
    const accessToken =   await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
   return this.http.put<Article>(environment.apiUrl+'article/'+ article.id,{
      "Title": article.title,
      "UserId": userId,
      "Content": article.content,
        "Id":article.id

  },{headers})
  }

  async deleteArticle(id:number){
    const accessToken =   await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
   return this.http.delete<Article>(environment.apiUrl+'article/'+ id,{headers})
  }
  

}
