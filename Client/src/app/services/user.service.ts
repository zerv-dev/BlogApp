import { Injectable } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http'
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment'
import { Profile,User } from "./../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;

  constructor(public oktaAuth:OktaAuthService, private http: HttpClient) { }

  fetchUser( email:string){
    let error:any;
      return this.http.get<User>(environment.apiUrl+'User/Email/'+email).pipe( map(result=>{
      this.user = result
      return this.user
    }
    ))
  }
  resetUser(){
    this.user = null;
    return;
  }
  getUserById(id:number){
    return this.http.get<User>(environment.apiUrl+'User/'+id);
  }
  getAllUsers(){
    return this.http.get<User[]>(environment.apiUrl+'User/');

  }
  getProfile(UserId:number){
    return this.http.get<Profile>(environment.apiUrl+'User/'+UserId+'/profile')
  }
  createUser(email:string,FirstName:string,LastName:string){
    return this.http.post<User>(environment.apiUrl+'User',{email,FirstName,LastName}).
    subscribe(user=>this.user=user,error=>console.error(error));
  }
  

}
