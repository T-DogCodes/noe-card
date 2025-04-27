import {Component, OnInit} from '@angular/core';
import {NoecardService} from "../../service/noecard.service";
import {RatingService} from "../../service/rating.service";
import {ARCHITEKTUR, BIER, ERLEBNISWELT, GESCHICHTE, KUNST, MUSEUM, RELIGION, SCHNAPS, STADTRUNDGANG, TECHNIK, VERKEHR, WEIN} from "../../service/TAGS";

/**
 * The credits component provides a credits page to credit all people and
 * organizations creating this application
 */
@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

    output: string[] = [];

    constructor(
        private noecardService: NoecardService,
        private ratingService: RatingService
    ) {
    }

    TAGS = [
        MUSEUM, ERLEBNISWELT, STADTRUNDGANG,
        GESCHICHTE, ARCHITEKTUR, KUNST, RELIGION,
        WEIN, SCHNAPS, TECHNIK, BIER, VERKEHR
    ];

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
        }).subscribe(value => {
            for (let entry of value.entries) {
                const tagsOfEntry = this.ratingService.getRatingForId(entry.id)?.tag ?? [];
                let value = [entry.id, entry.title, ...this.TAGS.map(tag => this.containsRating(tagsOfEntry, tag))].join(";")
                if (value.includes(";X")) {
                    this.output.push(value);
                }
            }
        })
    }

    private containsRating(tags: string[], value: string) {
        return tags.includes(value) ? "X": "";
    }

}
