import {Pipe, PipeTransform} from '@angular/core';
import {Entry} from "../declarations";
import {RatingService} from "../../service/rating.service";

@Pipe({
    name: 'uncategorized',
    standalone: false
})
export class UncategorizedPipe implements PipeTransform {

    constructor(
        private ratingService: RatingService
    ) {
    }

    transform(entries: Entry[]): Entry[] {
        return entries.map(e => ([e, this.ratingService.getRatingForId(e.id)] as const))
            .filter(([, r]) => r != null && r?.tag?.length == 0)
            .filter(([, r]) => r != undefined)
            .map(([e]) => e)
    }

}
