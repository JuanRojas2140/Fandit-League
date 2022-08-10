import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class LigasService {
  public headers: any = new HttpHeaders({
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '4313091ecemsh1bc9e3abb7dd834p101e7fjsn527e2c52866f',
  });

  constructor(public http: HttpClient) {}
  getByParam(key: string, value: any){
    return this.http.get<Api>(`https://api-football-v1.p.rapidapi.com/v3/leagues?${key}=${value}`, {
      headers: this.headers,
    });
  }
  getLigas(): Observable<Api> {
    return this.http.get<Api>('https://api-football-v1.p.rapidapi.com/v3/leagues?', {
      headers: this.headers,
    });



  }
}
