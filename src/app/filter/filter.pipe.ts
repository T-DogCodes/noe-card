import {Pipe, PipeTransform} from '@angular/core';
import {Entry, Filter, State} from "../declarations";
import {RatingService} from "../../service/rating.service";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    constructor(private ratingService: RatingService) {
    }

    transform(value: Entry[], filter: Filter | null): Entry[] {
        if (filter == null) {
            return value;
        } else if (this.isAllIdle(filter)) {
            return value;
        } else {
            const activeTags = this.getTagsOfState(filter, State.ACTIVE)
            const inactiveTags = this.getTagsOfState(filter, State.INACTIVE)

            if (activeTags.length != 0) {
                value = value.filter(entry => this.containsAnyOfTags(entry, activeTags));
            }
            if (inactiveTags.length != 0) {
                value = value.filter(entry => !this.containsAnyOfTags(entry, inactiveTags))
            }
            return value;
        }

    }

    private containsAnyOfTags(entry: Entry, tags: string[]) {
        for (let tag of this.ratingService.getRatingForId(entry.id)?.tag ?? []) {
            if (tags.includes(tag)) {
                return true;
            }
        }
        return false;
    }

    private getTagsOfState(filter: Filter, state: State) {
        return Object.entries(filter)
            .filter(([k, v]) => v == state)
            .map(([k, v]) => k)

    }

    private isAllIdle(filter: Filter) {
        for (let f in filter) {
            if (filter[f] != State.IDLE) {
                return false;
            }
        }
        return true;
    }

}
