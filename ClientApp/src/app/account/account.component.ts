import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../models/summoner.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {

  public summoner: Summoner;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Summoner>(baseUrl + "api/" + "Summoner/"+ "eun1/" + "Paczatek").subscribe(result => {
      this.summoner = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done")
    })
  }
}
