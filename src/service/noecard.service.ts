import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NoeCardResponse} from "../app/declarations";

@Injectable({
  providedIn: 'root'
})
export class NoecardService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(searchCriteria: any): Observable<NoeCardResponse> {
    return this.http.post<NoeCardResponse>("https://www.niederoesterreich-card.at/api/v1/activity/search/excursion", searchCriteria)
  }
}
