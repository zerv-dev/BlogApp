import { Component, ComponentFactoryResolver } from '@angular/core';
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
export class AppComponent {
  isAuthenticated: boolean;
  userClaims:any
  user:any
  constructor(public oktaAuth: OktaAuthService, private authService:AuthService) {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.authService.isAuthenticated();

    if(this.isAuthenticated){
      await this.oktaAuth.getUser().then(claims=>{
        this.userClaims = claims
      })
      
      this.user = {
            Email:this.userClaims.email,
            FirstName:this.userClaims.given_name,
            LastName:this.userClaims.family_name
      } 
      //Checks if user with this rmeail exists
      this.authService.fetchUser(this.user.Email).
      subscribe(result=>console.log(result),
      //
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