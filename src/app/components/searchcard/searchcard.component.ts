import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.scss']
})
export class SearchcardComponent implements OnInit {
  @Input('filteredLeague') filteredLeague: any;
  constructor() { }

  ngOnInit(): void {
  }

}
