import {Pipe, PipeTransform} from '@angular/core';
import {RatingService} from "../../service/rating.service";
import {Entry} from "../declarations";

/**
 * Filters the entries and returns only entries with the corresponding provided
 * rating.
 */
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
            .filter(([, r]) => r == rating)
            .map(([e]) => e)
    }

}
