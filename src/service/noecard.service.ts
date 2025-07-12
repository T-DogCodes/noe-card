import {Injectable} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
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

    private data: NoeCardResponse | null = null;

    public async getDataNew(): Promise<NoeCardResponse> {
        if (!this.data) {
            this.data = await firstValueFrom(this.getData(NoecardService.SEARCH_CRIETERIA));
        }
        return this.data!!;
    }
}
