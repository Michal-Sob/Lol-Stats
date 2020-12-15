import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummonerDTO } from '../models/SummonerDTO';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {

  public summoner: SummonerDTO;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<SummonerDTO>(baseUrl + "api/" + "Summoner/"+ "eun1/" + "Paczatek").subscribe(result => {
      this.summoner = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done")
    })
  }
}
