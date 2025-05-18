import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NoeCardResponse} from "../app/declarations";

@Injectable({
    providedIn: 'root'
})
export class NoecardService {

    public static SEARCH_CRIETERIA = {
        "categories": [
            "3",
            "5",
            "7",
            "9",
            "11",
            "13",
            "15",
            "17"
        ],
        "visited": false,
        "notVisited": false,
        "onlineBookable": false,
        "favorite": false,
        "from": 0,
        "size": 900,
        "sortBy": [
            {
                "field": "score",
                "order": "desc"
            },
            {
                "field": "title",
                "order": "asc"
            }
        ]
    };

    constructor(
        private http: HttpClient
    ) {
    }

    public getData(searchCriteria: any): Observable<NoeCardResponse> {
        return this.http.post<NoeCardResponse>("https://www.niederoesterreich-card.at/api/v1/activity/search/excursion", searchCriteria)
    }
}
