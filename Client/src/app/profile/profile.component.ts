import { Component, OnInit } from '@angular/core';
import { UserService } from "./../services/user.service";
import { User, Article,Profile} from "./../interfaces";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // selectedUser:User;
  articles:Article[]
  selectedUser:Profile
  constructor(private userService:UserService,private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params=>{
          this.userService.getProfile(params.id).subscribe(profile=>{
            this.selectedUser= profile
          })
      })
  }

}
