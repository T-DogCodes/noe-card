import {Component, Input, OnInit} from '@angular/core';
import {Entry, Rating} from "../../declarations";
import {RatingService} from "../../../service/rating.service";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'app-compact-card',
  templateUrl: './compact-card.component.html',
  styleUrls: ['./compact-card.component.scss']
})
export class CompactCardComponent implements OnInit {

    @Input() value!: Entry;
    rating: Rating | undefined = undefined

    constructor(
        private ratingService: RatingService,
        private imageService: ImageService
    ) {
    }

    ngOnInit(): void {
        this.rating = this.ratingService.getRatingForId(this.value.id)
    }
}
