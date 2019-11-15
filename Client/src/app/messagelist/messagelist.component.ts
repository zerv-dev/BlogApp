import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import 'rxjs/Rx';

interface Message {
   date: String,
   text: String
}
@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessageListComponent implements OnInit{
  messages: Array<Message>;

  constructor(private oktaAuth: OktaAuthService, private http: HttpClient) {
    this.messages = [];
  }

  async ngOnInit() {
    console.log(this.oktaAuth.getUser())
    const accessToken = await this.oktaAuth.getAccessToken();
  
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
    // Make request
     this.http.get<Message[]>(
      'https://localhost:5001/article',
      {headers}
    ).subscribe(result =>{
      this.messages = result
    })
  }
}