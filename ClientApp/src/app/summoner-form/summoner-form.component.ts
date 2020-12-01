import { Component } from '@angular/core';
import { Summoner } from './Summoner';

@Component({
    selector: 'app-summoner-form',
    templateUrl: './summoner-form.component.html',
    styleUrls: ['./summoner-form.component.scss']
})
/** summoner-form component*/
export class SummonerFormComponent {
  serverLocations = ['EU-W', 'EU-NE',
    'NA', 'ASIA'];

  model = new Summoner('', this.serverLocations[0]);

  submitted = false;

  onSubmit() {
    console.log(this.model.name);
    console.log(this.model.serverLocation);
    this.submitted = true;
  }

  
}
