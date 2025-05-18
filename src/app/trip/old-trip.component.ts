import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OldTripsService} from "../../service/old-trips.service";
import {Trip} from "../declarations";

@Component({
    selector: 'app-trip',
    templateUrl: './old-trip.component.html',
    styleUrls: ['./old-trip.component.scss']
})
export class OldTripComponent implements OnInit {

    tripId!: number;
    trip!: Trip

    constructor(
        private route: ActivatedRoute,
        private tripsService: OldTripsService
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(map => this.tripId = Number(map.get("id")));
        this.trip = this.tripsService.getTripForId(this.tripId)
    }

}
