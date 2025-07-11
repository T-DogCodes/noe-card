import { Pipe, PipeTransform } from '@angular/core';
import {HeaderTripStop, TripStop} from "./trips/trip/trip.model";

@Pipe({
  name: 'filterHeader'
})
export class FilterHeaderPipe implements PipeTransform {

  transform(value: TripStop[], pageHeader: string | undefined): TripStop[] {
    if (pageHeader) {
        return value
            .filter(stop => !(stop.type == "header" ?? (stop as HeaderTripStop).title == pageHeader))
    } else {
        return value
    }
  }

}
