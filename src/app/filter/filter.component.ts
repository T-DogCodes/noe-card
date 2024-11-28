import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TAGS} from "../../service/TAGS";
import {State} from "../declarations";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    tags = TAGS
    states: {[key: string]: State} = {}

    @Output() filterValues = new EventEmitter<{[key: string]: State}>();

  constructor() {
  }

  ngOnInit(): void {
    for (let tag of this.tags) {
        this.states[tag] = State.IDLE;
    }
  }

  onClick (tag: string) {
        switch (this.states[tag]) {
            case State.IDLE:
                this.states[tag] = State.ACTIVE
                break;
            case State.ACTIVE:
                this.states[tag] = State.INACTIVE
                break;
            case State.INACTIVE:
                this.states[tag] = State.IDLE
                break;
        }

        this.filterValues.emit({...this.states})
  }
}
