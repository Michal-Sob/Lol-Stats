import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../models/summoner.model';
import { ActivatedRoute } from "@angular/router";
import { LeagueEntryDTO } from '../models/leagueEntry.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent  {

  private server;
  private summonerName;

  public summoner: LeagueEntryDTO;

  
    
  

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.server = this.route.snapshot.paramMap.get("loc");
    this.summonerName = this.route.snapshot.paramMap.get("summonerName");
    http.get<LeagueEntryDTO>(baseUrl + "api/" + "Summoner/"+ this.server + '/' + this.summonerName).subscribe(result => {
      this.summoner = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done")
    })
  }
}
