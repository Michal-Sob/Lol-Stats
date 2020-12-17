import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summoner } from '../models/summoner.model';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from "@angular/router";



// SERVICE NOT USED.
// RIOT API BLOCKING GET REQUEST TO FRONTEND
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  private server;
  private summonerName;
  

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.route.snapshot.paramMap.get("loc");
    this.summonerName = this.route.snapshot.paramMap.get("summonerName");
  }

  GetAccountBySummName(summonerName: string): Observable<Summoner> {
    return this.http.get<Summoner>(`https://${this.server}${environment.baseUrl}/summoner/v4/summoners/by-name/${this.summonerName}`, {
      headers: new HttpHeaders()
        //.append(environment.keyApiKey, environment.valueApiKey)
        .append("Accept", "*/*")
    })
  }
}
