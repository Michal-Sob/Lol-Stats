import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { cwd } from "process";
import { FeaturedGameInfo } from "../models/LiveMatches/featuredGameInfo.model";
import { FeaturedGames } from "../models/LiveMatches/featuredGames.model";
import { SearchedSummoner } from "../summoner-form/searchedSummoner.model";
import { GetServer } from "../util/Servers.enum";

@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.css']
})

export class LiveFormComponent {

  public featuredGames: FeaturedGames[];
  public GamesList: FeaturedGameInfo[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router //instanciate a router
  ) {
    this.GetFeaturedGames(2, "EUW", http, baseUrl)
  };

  serverLocations = ['EUW', 'EUNE',
    'NA', 'KR', 'OCE', 'JP', 'RU', 'LAS', 'LAN', 'BR'];
  model = new SearchedSummoner('', this.serverLocations[0]);
  submitted = false;

  
  onSubmit() {
    console.log(this.model.name);
    console.log(this.model.serverLocation);
    this.submitted = true;
    this.router.navigateByUrl('/live/' + this.model.serverLocation + '/' + this.model.name);
  }

  AddTooGameList(featuredGames: FeaturedGames) {
      for (let game of featuredGames.gameList) {
        if (game.gameMode == "CLASSIC") {
          this.GamesList[this.GamesList.length] = game;
        }
      }
    return this.GamesList
  }

  GetFeaturedGames(ammount: number, server: string, http: HttpClient, baseUrl: string) {

    this.featuredGames = new Array;
    this.GamesList = new Array;

    for (var i = 0; i < ammount; i++) {
      if (i == 0) {
        http.get<FeaturedGames>(`${baseUrl}api/Live/FeaturedGames/by-server/${GetServer(server)}`).subscribe(result => {
          this.featuredGames[0] = result,
            console.log(result),
            console.log(this.AddTooGameList(this.featuredGames[this.featuredGames.length - 1]))
            console.log(this.featuredGames[0].gameList[0].participants[0].summonerName),
            err => console.log(err),
            () => console.log("Request Done")
        })
      }
      else {
        http.get<FeaturedGames>(`${baseUrl}api/Live/FeaturedGames/by-server/${GetServer("NA")}`).subscribe(result => {
          this.featuredGames[this.featuredGames.length] = result,
            console.log(this.featuredGames.length),
            console.log(this.featuredGames),
            console.log(this.AddTooGameList(this.featuredGames[this.featuredGames.length - 1]))
            console.log(result),
            console.log(this.featuredGames[this.featuredGames.length - 1].gameList[0].participants[0].summonerName),
            err => console.log(err),
            () => console.log("Request Done")
        })
      }
    }



    //while (this.GamesList.length < 2) {
    //  for (var i = 0; i < ammount; i++) {
    //    if (this.featuredGames.length > 1 || i == 0) {
    //      if (i == 0) {
    //        http.get<FeaturedGames>(`${baseUrl}api/Live/FeaturedGames/by-server/${GetServer(server)}`).subscribe(result => {
    //          this.featuredGames[0] = result,
    //            console.log(result),
    //            console.log(this.featuredGames[0].gameList[0].participants[0].summonerName),
    //            err => console.log(err),
    //            () => console.log("Request Done")
    //        })
    //      }
    //      else {
    //        http.get<FeaturedGames>(`${baseUrl}api/Live/FeaturedGames/by-server/${GetServer("NA")}`).subscribe(result => {
    //          this.featuredGames[this.featuredGames.length] = result,
    //            console.log(this.featuredGames.length),
    //            console.log(this.featuredGames),
    //            console.log(result),
    //            console.log(this.featuredGames[0].gameList[0].participants[0].summonerName),
    //            err => console.log(err),
    //            () => console.log("Request Done")
    //        })
    //      }
    //    }
    //  }
    //  for (let gamesArray of this.featuredGames) {
    //    for (let game of gamesArray.gameList) {
    //      console.log(game)
    //      console.log(game.gameMode)
    //      console.log(this.GamesList)
    //      if (game.gameMode == "CLASSIC") {
    //        this.GamesList[this.GamesList.length] = game;
    //      }
    //    }
    //  }
    //}

    console.log(this.GamesList)
  }
}
