import {Component, Input, OnInit} from '@angular/core';
import {Entry, Rating} from "../../declarations";
import {RatingService} from "../../../service/rating.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() value!: Entry;
    rating: Rating | null = null

    constructor(
        private ratingService: RatingService,
    ) {
    }

    ngOnInit(): void {
        this.rating = this.ratingService.getRatingForId(this.value.id)
    }
}
