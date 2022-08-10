
import { Component, OnInit } from '@angular/core';

import { LigasService } from 'src/app/services/ligas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data:any[] = [];


  constructor(private ligasService: LigasService) {

  }

  ngOnInit(): void {
   this.getLigas()
  }

  getLigas(){
    this.ligasService.getLigas().subscribe(data =>{
      console.log(data)
      this.data= data.response;
      ;

    })
  }
}
