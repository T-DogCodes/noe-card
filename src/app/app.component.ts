import {Component, OnInit} from '@angular/core';
import {NoecardService} from "../service/noecard.service";
import {NoeCardResponse} from "./declarations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit{

  data: NoeCardResponse | null = null

  constructor(

  ) {
  }

  title = 'noecard';

  ngOnInit() {

  }

}
