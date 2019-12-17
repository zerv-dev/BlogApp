import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';

import { Router } from '@angular/router';
import { environment } from "./../environments/environment";
import {User} from './interfaces'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  isAuthenticated: boolean;
  userClaims:any
  user:any
  constructor(public oktaAuth: OktaAuthService,private router: Router, private authService:AuthService,private userService:UserService) {
    // Subscribe to authentication state changes
    console.log(environment)
this.isAuthenticated = false
    console.log('constructor is called')
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  =>{ 
        this.isAuthenticated = isAuthenticated;
        console.log('isAuthenticated')
        if(this.isAuthenticated){
          this.handleUser()
        }
      }

    );
    // let token = oktaAuth.handleAuthentication();

    
    
  }

  async ngAfterViewInit() {
        this.isAuthenticated = await this.authService.isAuthenticated();

    this.handleUser()
    console.log('ngAfterViewInit')
  }
  login() {
    this.oktaAuth.loginRedirect();
  }

  logout() {
    this.userService.resetUser()// = null
    this.oktaAuth.logout('/');
  }


  async handleUser(){
    if(this.isAuthenticated){
        console.log('authenticated');
        
      await this.oktaAuth.getUser().then(claims=>{
        this.userClaims = claims
      })
      console.log(this.userClaims)
      
      this.user = {
            Email:this.userClaims.email,
            FirstName:this.userClaims.given_name,
            LastName:this.userClaims.family_name
      } 
      //Checks if user with this email exists
      this.userService.fetchUser(this.user.Email).
      subscribe(result=>console.log(result),
      //if the user doesn't exist we will create the user
      error=>{
        if(error.status == 404){
          this.userService.createUser(this.user.Email,this.user.FirstName,this.user.LastName)
        }
      })
    }
  }
}