import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

interface Message {
  message: string
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
})
export class ExternalApiComponent implements OnInit {
  message: string = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  callApi(): void {
    this.httpClient
    .get(`${env.dev.serverUrl}/api/messages/public-message`)
    .subscribe((result: Message) => {
      this.message = result.message
    });
  }

    callSecureApi(): void {
      this.httpClient
      .get(`${env.dev.serverUrl}/api/messages/protected-message`)
      .subscribe((result: Message) => {
        this.message = result.message
    });
  }
}
