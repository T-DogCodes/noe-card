import {Component, Input, OnInit} from '@angular/core';
import {Entry, Rating} from "../../declarations";
import {RatingService} from "../../../service/rating.service";

/**
 * The compact card component represents a card of the compat view
 *
 * The card displays different information about the noe-card destination, like
 * its tags, its ratings and inherit information from the API and allows a user
 * to navigate to the information page on the noe-card website
 */
@Component({
  selector: 'app-compact-card',
  templateUrl: './compact-card.component.html',
  styleUrls: ['./compact-card.component.scss']
})
export class CompactCardComponent implements OnInit {

    /**
     * The entry to be displayed in this card, required
     */
    @Input() value!: Entry;

    /**
     * The rating-object corresponding to the provided entry
     */
    rating: Rating | undefined = undefined

    constructor(
        private ratingService: RatingService,
    ) {
    }

    ngOnInit(): void {
        this.rating = this.ratingService.getRatingForId(this.value.id)
    }
}
