import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TripsService} from "../../service/trips.service";
import {Trip} from "../declarations";

@Component({
    selector: 'app-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

    tripId!: number;
    trip!: Trip

    constructor(
        private route: ActivatedRoute,
        private tripsService: TripsService
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(map => this.tripId = Number(map.get("id")));
        this.trip = this.tripsService.getTripForId(this.tripId)
    }

}
