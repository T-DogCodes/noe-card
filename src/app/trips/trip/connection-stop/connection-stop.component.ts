import {Component, Input, OnInit} from '@angular/core';
import {ConnectionTripStop} from "../trip.model";

@Component({
    selector: 'app-connection-stop',
    templateUrl: './connection-stop.component.html',
    styleUrls: ['./connection-stop.component.scss', '../trip.global.scss']
})
export class ConnectionStopComponent implements OnInit {

    @Input()
    isEven!: boolean
    @Input()
    stop!: ConnectionTripStop;

    constructor() {
    }

    ngOnInit(): void {
    }

}
