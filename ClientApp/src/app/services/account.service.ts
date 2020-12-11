import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SummonerDTO } from '../models/SummonerDTO';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  server = "eun1";

  constructor(private http: HttpClient) { }

  GetAccountBySummName(summName: string): Observable<SummonerDTO> {
    return this.http.get<SummonerDTO>(`https://${this.server}${environment.baseUrl}/summoner/v4/summoners/by-name/${summName}`, {
      headers: new HttpHeaders()
        .append(environment.keyApiKey, environment.valueApiKey)
        .append("Accept", "*/*")
    })
  }
}
