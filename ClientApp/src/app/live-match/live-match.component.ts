import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FeaturedGames } from "../models/LiveMatches/featuredGames.model";
import { GetServer } from "../util/Servers.enum";

@Component({
  selector: 'app-live-match',
  templateUrl: './live-match.component.html'
})
export class LiveMatchComponent {
}
