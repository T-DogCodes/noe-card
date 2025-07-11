import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../../../service/trip.service";
import {HeaderTripStop, Trip, TripStop} from "./trip.model";
import {NoecardService} from "../../../service/noecard.service";
import {firstValueFrom} from "rxjs";
import {NoeCardResponse} from "../../declarations";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

    tripId!: number;
    trip!: Trip
    pages: TripStop[][] = [];
    response: NoeCardResponse | null = null;

    constructor(
        private route: ActivatedRoute,
        private tripsService: TripService,
        private dataService: NoecardService,
    ) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(map => this.tripId = Number(map.get("id")));
        this.trip = this.tripsService.getTrip(this.tripId)
        if (Array.isArray(this.trip.stops[0])) {
            this.pages = this.trip.stops as TripStop[][];
        } else {
            this.pages = [this.trip.stops as TripStop[]]
        }
        this.fetchData().then(data => this.response = data);

    }

    private async fetchData() {
        return await firstValueFrom(this.dataService.getData(NoecardService.SEARCH_CRIETERIA))
    }

    getHeader(page: TripStop[]): HeaderTripStop | undefined {
        return page
            .map(stop => stop.type == "header" ? stop : undefined)
            .filter(stop => stop != undefined)
            ?.[0];
    }

}
