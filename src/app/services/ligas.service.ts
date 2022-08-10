import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LigasService {
  public header: any = new HttpHeaders({
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '4313091ecemsh1bc9e3abb7dd834p101e7fjsn527e2c52866f',
  });

  constructor(public http: HttpClient, public headers: HttpHeaders) {}
  getLigas(): Observable<any> {
    return this.http.get<any>('https://api-football-v1.p.rapidapi.com/v3/leagues?', {
      headers: this.headers,
    });

    // getLigas(){
    //   this.http
    //   .get('https://api-football-v1.p.rapidapi.com/v3/leagues?', {
    //     headers: this.headers
    //   })
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    // }
  }
}
