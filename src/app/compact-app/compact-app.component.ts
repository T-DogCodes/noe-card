import { Component, OnInit } from '@angular/core';
import {Filter, NoeCardResponse, SortingCriteria} from "../declarations";
import {NoecardService} from "../../service/noecard.service";

/**
 * The compact component represents the compact view of the application
 *
 * In the compact view, the noe-card destinations are presented in
 * compact-cards, providing the information about them.
 *
 * The view allows filtering the page
 */
@Component({
  selector: 'app-compact-app',
  templateUrl: './compact-app.component.html',
  styleUrls: ['./compact-app.component.scss']
})
export class CompactAppComponent implements OnInit {

    data: NoeCardResponse | null = null
    filter: Filter | null = null;

    constructor(
        private noecardService: NoecardService
    ) {
    }

    ngOnInit(): void {
        this.noecardService.getDataNew().then(value => this.data = value)
    }


    onFilterChange(filter: Filter) {
        this.filter = filter;
    }

    readonly SortingCriteria = SortingCriteria;
}
