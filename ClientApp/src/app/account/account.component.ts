import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../models/summoner.model';
import { ActivatedRoute } from "@angular/router";
import { LeagueEntry } from '../models/leagueEntry.model';
import { UserSite } from '../models/userSite.model';
import { GetServer } from '../util/Servers.enum';
import { matchList } from '../models/PlayedMatches/matchList.model';
import ListMatchData from '../../assets/_files/matchhistory/matchhistory1.json';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent  {

  private server;
  private summonerName;
  /*private matchData;*/
  private matchDataTime; 
  private matchDataLong;
  private correctSummoner;
  private matchDataParticipants;
  private matchDataParticipantIdentities;
  private listOfMatchData: any[];

  public userData: UserSite;
  public matchHistory: matchList;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    this.server = this.route.snapshot.paramMap.get("loc");

    this.summonerName = this.route.snapshot.paramMap.get("summonerName");

    this.listOfMatchData = ListMatchData.games;
    console.log(this.listOfMatchData);
    this.correctSummoner = getAllCorrentSummoners(this.summonerName, this.listOfMatchData);
    this.matchDataTime = getAllDataTimes(this.listOfMatchData);
    this.matchDataLong = getAllMatchDataLongs(this.listOfMatchData);
    this.matchDataParticipants = getAllParticipants(this.listOfMatchData);
    this.matchDataParticipantIdentities = getAllParticipantIdentities(this.listOfMatchData);

    http.get<UserSite>(`${baseUrl}api/Summoner/summonerSiteDTO/by-name/${GetServer(this.server)}/${this.summonerName}`).subscribe(result => {
      this.userData = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done");
      

    })

    http.get<matchList>(`${baseUrl}assets/data/matchHistory.json`).subscribe(result => {
      this.matchHistory = result,
        console.log(result),
        err => console.log(err),
        () => console.log("Request Done")
    })

    
   /* console.log("-------------------------------------")
    console.log(this.correctSummoner)
    console.log("-------------------------------------")
    console.log(this.matchDataParticipants);
    console.log(this.matchDataLong);
    console.log(this.matchDataParticipantIdentities);
    console.log(this.matchDataTime);*/

    /*this.matchDataParticipants = MatchData.participants;
    this.matchDataParticipantIdentities = MatchData.participantIdentities;
    this.correctSummoner = this.matchData.participants[getIndexCurrentSummonerFromAllSummoners(this.summonerName, this.matchData)];*/

    // matchData = add(this.listOfMatchData[i]
    // Match duration in seconds.
    
    /*var date = new Date(this.listOfMatchData[i].gameDuration);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    this.matchDataLong = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.

    const d = new Date(this.listOfMatchData[i].gameCreation);
    this.matchDataTime.add( d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString());*/

    //list of matchData
    
    
    function getAllParticipants(listOfMatchData) {
      let i = 0;
      var tempMatchDataParticipants = [];
      for (let game in listOfMatchData) {

        tempMatchDataParticipants.push(listOfMatchData[i].participants);
        console.log(listOfMatchData[i].participants)
        i += 1;
      }
      return tempMatchDataParticipants;
    }

    function getAllParticipantIdentities(listOfMatchData) {
      var tempMatchDataParticipantIdentities = [];
      let i = 0;
      for (let game in listOfMatchData) {
        tempMatchDataParticipantIdentities.push(listOfMatchData[i].participantIdentities);
        i += 1;
      }
      return tempMatchDataParticipantIdentities;
    }

    function getAllCorrentSummoners(summonerName,listOfMatchData) {
      var tempCorrentSummoner = [];
      let i = 0;
      for (let game in listOfMatchData) {
        tempCorrentSummoner.push(listOfMatchData[i].participants[getIndexCurrentSummonerFromAllSummoners(summonerName, listOfMatchData[i])]);
        i += 1;
      }
      return tempCorrentSummoner;
    }

    function getAllMatchDataLongs(listOfMatchData) {
      var tempMatchDataLong = [];
      let i = 0;
      for (let game in listOfMatchData) {
        
        let date = new Date(listOfMatchData[i].gameDuration);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        tempMatchDataLong.push(hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2));
        i += 1;
      }
      return tempMatchDataLong;
    }

    function getAllDataTimes(listOfMatchData) {
      var tempMatchDataTime = [];
      let i = 0;
      for (let game in listOfMatchData) {

        var d = new Date(listOfMatchData[i].gameCreation);
        tempMatchDataTime.push(d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString());
        i += 1;
      }
      return tempMatchDataTime;
    }



        
        
        
        
    
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
