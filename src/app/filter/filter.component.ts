import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TAGS} from "../../service/TAGS";
import {Filter, SORTING_CRITERIA_NAME, SORTING_CRITERIAS, SortingCriteria, State} from "../declarations";

/**
 * The filter component is to provide filter possibilities to the end-user
 *
 * On filter change, the current filter settings are emitted using the
 * filterValues output.
 *
 * To apply the filter to the data, use the filter pipe
 */
@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    standalone: false
})
export class FilterComponent implements OnInit {

    tags = TAGS
    ratings = ["1", "2", "3", "4"]
    tagStates: { [key: string]: State } = {}

    ratingStates: { [key: string]: State } = {}
    ratingNames: { [key: string]: string } = {
        1: "Favorit", 2: "Toll", 3: "OK", 4: "Nein"
    }

    asc: boolean = true
    sortingCriterias = SORTING_CRITERIAS;
    sortingCriteria = SortingCriteria.DEFAULT;
    sortingCriteriaName = SORTING_CRITERIA_NAME;


    @Output() filterValues = new EventEmitter<Filter>();

    constructor() {
    }

    ngOnInit(): void {
        for (let tag of this.tags) {
            this.tagStates[tag] = State.IDLE;
        }
        for (let state of this.ratings) {
            this.ratingStates[state] = State.IDLE;
        }
    }

    onClickTag(tag: string) {
        this.changeState(tag, this.tagStates)
        this.emitFilterValues()
    }

    onClickRating(rating: string) {
        this.changeState(rating, this.ratingStates)
        this.emitFilterValues()
    }

    private changeState(id: string, elements: { [key: string]: State }) {
        switch (elements[id]) {
            case State.IDLE:
                elements[id] = State.ACTIVE
                break;
            case State.ACTIVE:
                elements[id] = State.INACTIVE
                break;
            case State.INACTIVE:
                elements[id] = State.IDLE
                break;
        }
    }

    private emitFilterValues() {

        this.filterValues.emit({
            ratings: this.ratingStates,
            tags: this.tagStates,
            sorting: {asc: this.asc, criteria: +this.sortingCriteria}
        })
    }

    onSortingClick() {
        this.asc = !this.asc;
        this.emitFilterValues()
    }

    onSortingChange() {
        this.emitFilterValues()
    }
}
