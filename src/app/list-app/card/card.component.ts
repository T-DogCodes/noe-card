import {Component, Input, OnInit} from '@angular/core';
import {Entry, Rating} from "../../declarations";
import {RatingService} from "../../../service/rating.service";
import {ImageService} from "../../../service/image.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

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

    getImage(tag: string) {
        return this.imageService.getImageForTag(tag)
    }


    protected readonly undefined = undefined;
}
