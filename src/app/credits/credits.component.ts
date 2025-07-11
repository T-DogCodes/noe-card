import {Component, OnInit} from '@angular/core';
import {NoecardService} from "../../service/noecard.service";
import {RatingService} from "../../service/rating.service";
import {ARCHITEKTUR, BIER, ERLEBNISWELT, GESCHICHTE, KUNST, MUSEUM, RELIGION, SCHNAPS, STADTRUNDGANG, TECHNIK, VERKEHR, WEIN} from "../../service/TAGS";

/**
 * The credits component provides a credits page to credit all people and
 * organizations creating this application
 */
@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {
    constructor(
    ) {
    }
}
