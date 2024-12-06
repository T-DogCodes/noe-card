import {Pipe, PipeTransform} from '@angular/core';
import {Entry, Filter, FilterElement, SortingCriteria, State} from "../declarations";
import {RatingService} from "../../service/rating.service";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    constructor(private ratingService: RatingService) {
    }

    transform(value: Entry[], filter: Filter | null): Entry[] {
        value = [...value];

        if (filter == null) {
            return value;
        }
        value = this.filterTags(value, filter.tags);
        value = this.filterRatings(value, filter.ratings);
        value = this.sort(value, filter.sorting.asc, filter.sorting.criteria);
        return value;
    }

    private sort(value: Entry[], asc: boolean, criteria: SortingCriteria) {
        const sortedValues = this.sortCriteria(value, criteria);
        return asc ? sortedValues : sortedValues.reverse();

    }

    private sortCriteria(value: Entry[], criteria: SortingCriteria) {
        switch (criteria) {
            case SortingCriteria.DEFAULT:
                return value;
            case SortingCriteria.NAME:
                return value.sort((a, b) => a.title.localeCompare(b.title));
            case SortingCriteria.ID:
                return value.sort((a, b) => a.id - b.id);
            case SortingCriteria.RATING:
                return value.sort((a, b) => this.getRating(a) - this.getRating(b));
        }
    }

    private getRating(element: Entry) {
        return this.ratingService.getRatingForId(element.id)?.rating ?? -1
    }

    private filterRatings(value: Entry[], ratingFilter: FilterElement) {
        if (this.isAllIdle(ratingFilter)) {
            return value;
        } else {
            const activeRatings = this.getIdsOfState(ratingFilter, State.ACTIVE)
            const inactiveRatings = this.getIdsOfState(ratingFilter, State.INACTIVE)

            if (activeRatings.length != 0) {
                value = value.filter(entry => this.containsAnyOfRating(entry, activeRatings));
            }
            if (inactiveRatings.length != 0) {
                value = value.filter(entry => !this.containsAnyOfRating(entry, inactiveRatings))
            }
            return value;
        }
    }

    private filterTags(value: Entry[], tagFiler: FilterElement) {
        if (this.isAllIdle(tagFiler)) {
            return value;
        } else {
            const activeTags = this.getIdsOfState(tagFiler, State.ACTIVE)
            const inactiveTags = this.getIdsOfState(tagFiler, State.INACTIVE)

            if (activeTags.length != 0) {
                value = value.filter(entry => this.containsAnyOfTags(entry, activeTags));
            }
            if (inactiveTags.length != 0) {
                value = value.filter(entry => !this.containsAnyOfTags(entry, inactiveTags))
            }
            return value;
        }
    }

    private containsAnyOfRating(entry: Entry, ratings: string[]) {
        return (ratings.includes(this.getRating(entry).toString()));
    }

    private containsAnyOfTags(entry: Entry, tags: string[]) {
        for (let tag of this.ratingService.getRatingForId(entry.id)?.tag ?? []) {
            if (tags.includes(tag)) {
                return true;
            }
        }
        return false;
    }

    private getIdsOfState(filter: FilterElement, state: State) {
        return Object.entries(filter)
            .filter(([k, v]) => v == state)
            .map(([k, v]) => k)

    }

    private isAllIdle(filter: FilterElement) {
        for (let f in filter) {
            if (filter[f] != State.IDLE) {
                return false;
            }
        }
        return true;
    }

}
