import {Component, OnInit} from '@angular/core';
import {TripService} from "../../service/trip.service";
import {Trip} from "./trip/trip.model";

@Component({
    selector: 'app-trips',
    templateUrl: './trips.component.html',
    styleUrls: ['./trips.component.scss'],
    standalone: false
})
export class TripsComponent implements OnInit {
    trips: (Trip & { id: string })[] = [];

    constructor(private tripsService: TripService) {
    }

    ngOnInit(): void {
        this.trips = this.tripsService.getTrips();
    }
}
