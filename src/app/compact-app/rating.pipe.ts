import {Pipe, PipeTransform} from '@angular/core';
import {RatingService} from "../../service/rating.service";
import {Entry} from "../declarations";

@Pipe({
    name: 'rating'
})
export class RatingPipe implements PipeTransform {

    constructor(
        private ratingService: RatingService
    ) {
    }

    transform(entries: Entry[], rating: number | undefined): Entry[] {

        return entries.map(e => ([e, this.ratingService.getRatingForId(e.id)?.rating] as const))
            .filter(([e, r]) => r == rating)
            .map(([e, r]) => e)
    }

}
