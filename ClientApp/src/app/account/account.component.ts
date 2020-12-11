import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummonerDTO } from '../models/SummonerDTO';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {

  public summoner: SummonerDTO;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private accountService: AccountService) {
    http.get<SummonerDTO>(baseUrl + "api/" + "Summoner").subscribe(result => {
      this.summoner = result,
        console.log(this.summoner),
        err => console.log(err),
        () => console.log("done fucking ass")
    })
  }

  public Account: SummonerDTO;

  //ngOnInit() {
  //  this.accountService.GetAccountBySummName("Paczatek")
  //    .subscribe(
  //      data => this.Account = data,
  //      err => console.log(err),
  //      () => console.log("all done getting readers")
  //    )
  //}
}

interface account {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}
