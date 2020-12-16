import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summoner } from '../models/summoner.model';
import { environment } from '../../environments/environment';


// SERVICE NOT USED.
// RIOT API BLOCKING GET REQUEST TO FRONTEND
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  server = "eun1";

  constructor(private http: HttpClient) { }

  GetAccountBySummName(summName: string): Observable<Summoner> {
    return this.http.get<Summoner>(`https://${this.server}${environment.baseUrl}/summoner/v4/summoners/by-name/${summName}`, {
      headers: new HttpHeaders()
        //.append(environment.keyApiKey, environment.valueApiKey)
        .append("Accept", "*/*")
    })
  }
}
