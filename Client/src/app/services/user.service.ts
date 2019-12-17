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



  getUserById(id:number){
    return this.http.get<User>(environment.apiUrl+'User/'+id);
  }
  getAllUsers(){
    return this.http.get<User[]>(environment.apiUrl+'User/');

  }
  getProfile(UserId:number){
    return this.http.get<Profile>(environment.apiUrl+'User/'+UserId+'/profile')
  }

}
