import {Component, Input, OnInit} from '@angular/core';
import {NoecardService} from "../../service/noecard.service";
import {Filter, NoeCardResponse, Trip} from "../declarations";
import {OldTripsService} from "../../service/old-trips.service";

@Component({
    selector: 'app-list-app',
    templateUrl: './list-app.component.html',
    styleUrls: ['./list-app.component.scss'],
    standalone: false
})
export class ListAppComponent implements OnInit {

    data: NoeCardResponse | null = null

    filter: Filter | null = null;

    @Input() trip : Trip | null = null

    constructor(
        private noecardService: NoecardService,
        private tripsService: OldTripsService
    ) {
    }

    ngOnInit(): void {
        this.noecardService.getDataNew().then(value => {
            this.data = this.trip == null ? value : this.tripsService.filterDataForTrips(value, this.trip)
        })
    }

    onFilterChange(value: Filter) {
        this.filter = value;
    }
}
