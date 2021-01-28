import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../models/summoner.model';
import { ActivatedRoute } from "@angular/router";
import { LeagueEntry } from '../models/leagueEntry.model';
import { UserSite } from '../models/userSite.model';
import { GetServer } from '../util/Servers.enum';
import MatchData from '../../assets/_files/matchhistory1.json';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent  {

  private server;
  private summonerName;
  private matchData;
  private matchDataTime; 
  private matchDataLong;
  private correctSummoner;

  

  public userData: UserSite;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.server = this.route.snapshot.paramMap.get("loc");

    this.summonerName = this.route.snapshot.paramMap.get("summonerName");

    this.matchData = MatchData;

    this.correctSummoner = this.matchData.participants[getIndexCurrentSummonerFromAllSummoners(this.summonerName, this.matchData)];

    console.log(this.correctSummoner);
    // Match duration in seconds.
    
    var date = new Date(this.matchData.gameDuration);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    this.matchDataLong = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.

    const d = new Date(this.matchData.gameCreation);
    this.matchDataTime = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

    

    http.get<UserSite>(`${baseUrl}api/Summoner/summonerSiteDTO/by-name/${GetServer(this.server)}/${this.summonerName}`).subscribe(result => {
      this.userData = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done")
    })
    function getIndexCurrentSummonerFromAllSummoners(summonerName, matchData) {
      let index = 0;

      for (let summoner of matchData.participantIdentities) {
        
        if (summoner.player.summonerName == summonerName) {
          
          return index;
        }
        index += 1;
      }
    }

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
