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
  

  
  // getUser(){
  //   return this.user;
  // }


}