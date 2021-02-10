import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SummonerFormComponent } from './summoner-form/summoner-form.component';
import { AccountService } from './services/account.service';
import { AccountComponent } from './account/account.component';
import { LiveFormComponent } from './live-form/live-form.component';
import { LiveMatchComponent } from './live-match/live-match.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SummonerFormComponent,
    AccountComponent,
    LiveFormComponent,
    LiveMatchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LiveFormComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'summoner-form', component: SummonerFormComponent },
      { path: 'account/:loc/:summonerName', component: AccountComponent },
      { path: 'live/:loc/:summonerName', component: LiveMatchComponent }

    ])
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
