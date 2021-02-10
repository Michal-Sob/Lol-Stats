import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SearchedSummoner } from "../summoner-form/searchedSummoner.model";

@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.css']
})

export class LiveFormComponent {
  constructor( private router: Router //instanciate a router
  ) { };

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
}
