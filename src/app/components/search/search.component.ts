import { Component, OnInit } from '@angular/core';
import { LigasService } from 'src/app/services/ligas.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public filteredLeagues: any [] = [];

  constructor(private ligasService: LigasService) {

  }


  ngOnInit(): void {
  }
  getByName(event: Event){
    const nameLeague = (event.target as HTMLInputElement).value;
    console.log(nameLeague)
    this.ligasService.getByParam("name", nameLeague).subscribe(data =>{
      console.log()

      this.filteredLeagues = data.response;
    })

  }
}
