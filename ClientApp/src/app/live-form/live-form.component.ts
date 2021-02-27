import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { cwd } from "process";
import { FeaturedGameInfo } from "../models/LiveMatches/featuredGameInfo.model";
import { FeaturedGames } from "../models/LiveMatches/featuredGames.model";
import { SearchedSummoner } from "../summoner-form/searchedSummoner.model";
import { GetServer } from "../../util/Servers.enum";
import { DragonTailService } from "../services/dragon-tail.service";
import { ChampionBasic } from "../models/Assets/Champion/championBasic.model";


@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.css']
})

export class LiveFormComponent implements OnInit {

  public featuredGames: FeaturedGames[];
  public GamesList: FeaturedGameInfo[];

  private http: HttpClient;
  private dragonTail: DragonTailService;
  private baseUrl: string;

  constructor(http: HttpClient, dragonTail: DragonTailService, @Inject('BASE_URL') baseUrl: string, private router: Router //instanciate a router
  ) {
    this.http = http;
    this.dragonTail = dragonTail;
    this.baseUrl = baseUrl;
  };

  async ngOnInit() {
    await this.GetFeaturedGames(2, "EUW", this.http, this.baseUrl)
  }

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

  AddToGameList(featuredGames: FeaturedGames) {
      for (let game of featuredGames.gameList) {
        if (game.gameMode == "CLASSIC") {
          this.GamesList[this.GamesList.length] = game;
        }
      }
    return this.GamesList
  }

  async GetFeaturedGames(ammount: number, server: string, http: HttpClient, baseUrl: string) {

    this.featuredGames = new Array;
    this.GamesList = new Array;

    let servers = ["EUW", "NA", "EUNE"]

    for (let i = 0; i < servers.length; i++) {
      http.get<FeaturedGames>(`${baseUrl}api/Live/FeaturedGames/by-server/${GetServer(servers[i])}`).subscribe(result => {
        this.featuredGames[this.featuredGames.length] = result,
          console.log(result),
          console.log(this.AddToGameList(this.featuredGames[this.featuredGames.length - 1])),
          console.log(this.featuredGames[this.featuredGames.length - 1].gameList[0].participants[0].summonerName),

          this.featuredGames.length == servers.length - 1 ? this.setPlayerChampionInfo(this.featuredGames, this.dragonTail) : console.log(),
          err => console.log(err),
          () => console.log("Request Done")
      })
    }

    console.log(this.GamesList)
  }

  setPlayerChampionInfo(featuredGames: FeaturedGames[], dragontail: DragonTailService) {
    let championsImgsPath: ChampionBasic[] = new Array();

    for (let singleRequest of featuredGames)
      for (let game of singleRequest.gameList)
        for (let player of game.participants) {
          championsImgsPath.push(dragontail.championById(player.championId));
          player.champion = dragontail.championById(player.championId)
        }

    console.log(championsImgsPath)
    return championsImgsPath;
  }
}
