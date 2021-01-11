import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../models/summoner.model';
import { ActivatedRoute } from "@angular/router";
import { LeagueEntry } from '../models/leagueEntry.model';
import { UserSite } from '../models/userSite.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent  {

  private server;
  private summonerName;

  public userData: UserSite;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.server = this.route.snapshot.paramMap.get("loc");
    this.summonerName = this.route.snapshot.paramMap.get("summonerName");

    http.get<UserSite>(baseUrl + "api/" + "Summoner/" + this.server + '/' + this.summonerName).subscribe(result => {
      this.userData = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done")
    })

    //http.get(baseUrl + "api/" + "Summoner/" + this.server + '/' + this.summonerName).subscribe(result => {
    //  this.summoner = result[0],
    //  this.leagues = result[1],
    //    console.log(result),
    //    console.log(result[0]),
    //    console.log(result[1[0]]),
    //    err => console.log(err),
    //    () => console.log("Request Done")
    //})
  }
}
