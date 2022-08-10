import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { LigasService } from 'src/app/services/ligas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public leagues:any[] = [];


  constructor(private ligasService: LigasService) { }

  ngOnInit(): void {
    // let headers = new HttpHeaders({
		// 	'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
		// 	'x-rapidapi-key': '4313091ecemsh1bc9e3abb7dd834p101e7fjsn527e2c52866f'
		// });
		// this.http
		// 	.get<any>('https://api-football-v1.p.rapidapi.com/v3/leagues?', {
		// 		headers: headers
		// 	})
		// 	.subscribe(data => {
    //     this.leagues = data.response
		// 	});

  }

  getLigas(){
    this.ligasService.getLigas().subscribe(data =>{
      console.log(data)
      this.leagues= data.response;
      ;

    })
  }

  // getLiga(event: Event){
  //   let headers = new HttpHeaders({
	// 		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
	// 		'x-rapidapi-key': '4313091ecemsh1bc9e3abb7dd834p101e7fjsn527e2c52866f'
	// 	});

  //   this.http
  //   .get<any>('https://api-football-v1.p.rapidapi.com/v3/leagues?', {
  //     headers: headers
  //   })
  //   .subscribe(data => {
  //     console.log(data);
  //   });
  // }



}

// private http: HttpClient, public header: HttpHeaders esto iba en el constructor
// public ligasService: LigasService esto iba en el constructor nuevo
