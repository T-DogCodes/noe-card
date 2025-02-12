import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Entry, Rating} from "../../declarations";
import {RatingService} from "../../../service/rating.service";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    buttonText: string = "Weitere Informationen";

    @Input() value!: Entry;
    rating: Rating | null = null

    constructor(
        private ratingService: RatingService,
    ) {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: Event) {
        this.buttonText = window.innerWidth <= 1000 ? "Weitere Infos" : "Weitere Informationen";
    }

    ngOnInit(): void {
        this.rating = this.ratingService.getRatingForId(this.value.id);
        this.onResize();
    }
}
