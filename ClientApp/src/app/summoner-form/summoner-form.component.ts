import { Component } from '@angular/core';
import { Summoner } from './Summoner';
import { Router } from '@angular/router';

@Component({
    selector: 'app-summoner-form',
    templateUrl: './summoner-form.component.html',
    styleUrls: ['./summoner-form.component.scss']
})
/** summoner-form component*/
export class SummonerFormComponent {
  serverLocations = ['euw1', 'EUN1',
    'NA', 'ASIA'];
  constructor(
    private router: Router //instanciate a router
  ) { };

  model = new Summoner('', this.serverLocations[0]);

  submitted = false;

  onSubmit() {
    console.log(this.model.name);
    console.log(this.model.serverLocation);
    this.submitted = true;
    this.router.navigateByUrl('/account/'+this.model.serverLocation+'/'+this.model.name);
  }

  
}
