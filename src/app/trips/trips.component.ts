import { Component, OnInit } from '@angular/core';
import {Trip} from "../declarations";
import {TripsService} from "../../service/trips.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
    trips!: Trip[];

  constructor(private tripsService: TripsService) { }

  ngOnInit(): void {
      this.trips = this.tripsService.TRIPS;
  }
}
