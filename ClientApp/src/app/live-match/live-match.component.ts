import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FeaturedGames } from "../models/LiveMatches/featuredGames.model";
import { GetServer } from "../../util/Servers.enum";
import { DragonTailService } from "../services/dragon-tail.service";
import { CurrentGameInfo } from "../models/LiveMatches/currentGameInfo.model";
import { Summoner } from "../models/summoner.model";
import { UserSite } from "../models/userSite.model";

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html',
  styleUrls: ['./live-match.component.css']
})
export class LiveMatchComponent implements OnInit {

  private name: string;
  private server: string;
  private searchedPlayer: Summoner;
  public Game: CurrentGameInfo;

  constructor
    (private route: ActivatedRoute,
    private http: HttpClient,
    private dragonTailData: DragonTailService) { }

  async ngOnInit() {
    this.server = this.route.snapshot.paramMap.get("loc");
    this.name = this.route.snapshot.paramMap.get("summonerName");


  }

  async getSearchedSummonerInfo(http: HttpClient, baseUrl: string, server: string, name: string) {
    await http.get<Summoner>(`${baseUrl}api/Summoner/summonerDTO/by-name/${GetServer(server)}/${name}`).subscribe(result => {
      this.searchedPlayer = result,
        console.log(result),
        this.getLiveGame(http, baseUrl, server, this.searchedPlayer.id),
        err => console.log(err),
        () => console.log("Request Done");
    })
  }

  async getLiveGame(http: HttpClient, baseUrl: string, server: string, summId: string) {
    await http.get<CurrentGameInfo>(`${baseUrl}api/Live/currentGame/by-summoner/${GetServer(server)}/${summId}`).subscribe(result => {
      this.Game = result,
        console.log(result),

        err => console.log(err),
        () => console.log("Request Done")
    })
  }

  async getPlayersData(http: HttpClient, baseUrl: string, server: string, name: string) {

    await http.get<UserSite>(`${baseUrl}api/Summoner/summonerSiteDTO/by-name/${GetServer(server)}/${name}`).subscribe(result => {
      //this.searchedPlayer = result,
        console.log(result),

        err => console.log(err),
        () => console.log("Request Done");
    })
  }
}
