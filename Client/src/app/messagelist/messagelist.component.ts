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
    const accessToken = await this.oktaAuth.getAccessToken();
    console.log(accessToken)
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + accessToken
    });
    // Make request
     this.http.get<Message[]>(
      'https://localhost:5001/WeatherForecast',
      {headers}
    ).subscribe(result =>{
      this.messages = result
    })
  }
}