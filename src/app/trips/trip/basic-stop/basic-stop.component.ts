import {Component, Input, OnInit} from '@angular/core';
import {BasicTripStop} from "../trip.model";
import {Entry, NoeCardResponse} from "../../../declarations";

@Component({
    selector: 'app-basic-stop',
    templateUrl: './basic-stop.component.html',
    styleUrls: ['./basic-stop.component.scss', '../trip.global.scss']
})
export class BasicStopComponent implements OnInit {

    @Input()
    isEven!: boolean
    @Input()
    stop!: BasicTripStop;
    @Input()
    data!: NoeCardResponse


    value!: Entry;

    constructor() {
    }

    ngOnInit(): void {
        this.value = this.data.entries.filter(entry => entry.id == +this.stop.id)[0];
    }

    getAddress() {
        const c = this.value.contact;
        const streetNumber = c.streetNumber ? " " + c.streetNumber : ""
        return `${c.street}${streetNumber}, ${c.zipcode} ${c.city}`
    }
}
