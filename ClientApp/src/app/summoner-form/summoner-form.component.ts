import { Component } from '@angular/core';
import { SearchedSummoner } from './searchedSummoner.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-summoner-form',
    templateUrl: './summoner-form.component.html',
    styleUrls: ['./summoner-form.component.scss']
})
/** summoner-form component*/
export class SummonerFormComponent {
  constructor(
    private router: Router //instanciate a router
  ) { };

  serverLocations = ['EUW', 'EUNE',
    'NA', 'KR', 'OCE', 'JP', 'RU', 'LAS', 'LAN', 'BR'];

  model = new SearchedSummoner('', this.serverLocations[0]);

  submitted = false;

  onSubmit() {
    console.log(this.model.name);
    console.log(this.model.serverLocation);
    this.submitted = true;
    this.router.navigateByUrl('/account/'+this.model.serverLocation+'/'+this.model.name);
  }
}
