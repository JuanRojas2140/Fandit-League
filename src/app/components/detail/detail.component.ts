import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LigasService } from 'src/app/services/ligas.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private ligasService: LigasService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.ligasService.getByParam("id", this.route)
    console.log(this.route.snapshot.params['id']);
  }

}
