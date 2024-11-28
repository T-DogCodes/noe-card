import {Component, OnInit} from '@angular/core';
import {NoecardService} from "../service/noecard.service";
import {NoeCardResponse} from "./declarations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  data: NoeCardResponse | null = null

  constructor(
    private noecardService: NoecardService
  ) {
  }

  title = 'noecard';

  ngOnInit() {
    this.noecardService.getData({
      "categories": [
        "3",
        "5",
        "7",
        "9",
        "11",
        "13",
        "15",
        "17"
      ],
      "visited": false,
      "notVisited": false,
      "onlineBookable": false,
      "favorite": false,
      "from": 0,
      "size": 900,
      "sortBy": [
        {
          "field": "score",
          "order": "desc"
        },
        {
          "field": "title",
          "order": "asc"
        }
      ]
    }).subscribe(value => this.data = value)
    console.log("set")
  }

}
