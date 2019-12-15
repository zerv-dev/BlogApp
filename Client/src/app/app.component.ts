import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from "@okta/okta-angular";
import {AuthService} from './auth.service';
interface User{
  Id:number
  Email:string;
  FirstName:string;
  LastName:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  isAuthenticated: any;
  userClaims:any
  user:any
  constructor(public oktaAuth: OktaAuthService, private authService:AuthService) {
    // Subscribe to authentication state changes
    console.log('constructor is called')
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  =>{ this.isAuthenticated = isAuthenticated;}

    );
    // let token = oktaAuth.handleAuthentication();

    
    
  }

  async ngAfterViewInit() {
    // Get the authentication state for immediate use
    console.log('ngAfterViewInit')
    this.isAuthenticated = await this.authService.isAuthenticated();
    if(this.isAuthenticated){
        console.log('authenticated');
        
      await this.oktaAuth.getUser().then(claims=>{
        this.userClaims = claims
      })
      
      this.user = {
            Email:this.userClaims.email,
            FirstName:this.userClaims.given_name,
            LastName:this.userClaims.family_name
      } 
      //Checks if user with this email exists
      this.authService.fetchUser(this.user.Email).
      subscribe(result=>console.log(result),
      //if the user doesn't exist we will create the user
      error=>{
        if(error.status == 404){
          this.authService.createUser(this.user.Email,this.user.FirstName,this.user.LastName)
        }
      })
    }

  }
  login() {
    this.oktaAuth.loginRedirect();
  }

  logout() {
    this.oktaAuth.logout('/');
  }
}