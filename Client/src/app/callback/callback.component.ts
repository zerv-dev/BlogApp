import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private oktaAuth:OktaAuthService,private router: Router, private authService: AuthService) { }

  async ngOnInit() {

    this.oktaAuth.handleAuthentication().then(async ()=> {
      let userClaims = {
        email:'',
        FirstName:'',
        LastName:''
      }
      await this.oktaAuth.getUser().then(UserClaims=>{
        userClaims.email = UserClaims.email;
        userClaims.FirstName= UserClaims.given_name,
        userClaims.LastName = UserClaims.family_name

      })
      await this.authService.fetchUser(userClaims.email)
      .subscribe((data: any)=>{
        console.log('found user')

      },
      (error:any)=>{
        console.log('couldnt find user')
        // const body: object = {
        //   firstName: localStorage.getItem('firstName'),
        //   lastName: localStorage.getItem('lastName'),
        //   email: localStorage.getItem('email')
          
        // }
        if(error.status){
          this.authService.createUser(userClaims.email,userClaims.FirstName,userClaims.LastName)
        }
          // .subscribe((data:any)=> {
          //   localStorage.setItem('id', data.id)
          //   router.navigate(['/shelf']);

          // })
      })
    });
  }

}
