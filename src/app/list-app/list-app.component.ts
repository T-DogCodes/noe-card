import {Component, OnInit} from '@angular/core';
import {NoecardService} from "../../service/noecard.service";
import {Filter, NoeCardResponse, State} from "../declarations";

@Component({
    selector: 'app-list-app',
    templateUrl: './list-app.component.html',
    styleUrls: ['./list-app.component.scss']
})
export class ListAppComponent implements OnInit {

    data: NoeCardResponse | null = null

    filter: Filter | null = null;

    constructor(
        private noecardService: NoecardService
    ) {
    }

    ngOnInit(): void {
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
    }

    onFilterChange(value: Filter) {
        this.filter = value;
    }
}
