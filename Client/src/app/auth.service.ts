import { Injectable } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

interface User{
  Email:string,
  FirstName:string;
  LastName:string

}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user:User;
    constructor(public oktaAuth:OktaAuthService, private http: HttpClient,){     
    // console.log(this.isAuthenticated)
    
  }
  async isAuthenticated() {    
    // Checks if there is a current accessToken in the TokenManger.
    return await this.oktaAuth.isAuthenticated();
  }
  async getAccessToken() {
    // Checks if there is a current accessToken in the TokenManger.
    return await this.oktaAuth.getAccessToken();
  }
  fetchUser( email:string){
    let error:any;
      return this.http.get<User>('https://blogserver20191215071216.azurewebsites.net/api/User/Email/'+email).map(result=>{
      this.user = result
      return this.user
    }
    )

  }

  getUser(){
    return this.user;
  }
  createUser(email:string,FirstName:string,LastName:string){
    return this.http.post<User>('https://blogserver20191215071216.azurewebsites.net/api/User',{email,FirstName,LastName}).
    subscribe(user=>this.user=user,error=>console.error(error));
  }

}