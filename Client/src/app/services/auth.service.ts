import { Injectable } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'
import {User} from './../interfaces'
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
      return this.http.get<User>(environment.apiUrl+'User/Email/'+email).pipe( map(result=>{
      this.user = result
      return this.user
    }
    ))

  }

  getUser(){
    return this.user;
  }
  createUser(email:string,FirstName:string,LastName:string){
    return this.http.post<User>(environment.apiUrl+'User',{email,FirstName,LastName}).
    subscribe(user=>this.user=user,error=>console.error(error));
  }

}