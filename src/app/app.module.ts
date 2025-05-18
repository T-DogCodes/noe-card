import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CardComponent} from './list-app/card/card.component';
import {DescriptionPipe} from './description.pipe';
import {CompactAppComponent} from './compact-app/compact-app.component';
import {ListAppComponent} from './list-app/list-app.component';
import {CompactCardComponent} from './compact-app/compact-card/compact-card.component';
import {RatingPipe} from './compact-app/rating.pipe';
import {LengthPipe} from './compact-app/length.pipe';
import {FilterComponent} from './filter/filter.component';
import {TagComponent} from './tag/tag.component';
import { FilterPipe } from './filter/filter.pipe';
import { TakePipe } from './take.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditsComponent } from './credits/credits.component';
import {FormsModule} from "@angular/forms";
import { TripsComponent } from './trips/trips.component';
import { OldTripComponent } from './trip/old-trip.component';
import { UncategorizedPipe } from './compact-app/uncategorized.pipe';
import {TripComponent} from "./trips/trip/trip.component";
import { BasicStopComponent } from './trips/trip/basic-stop/basic-stop.component';
import { ConnectionStopComponent } from './trips/trip/connection-stop/connection-stop.component';
import { RemoveBrPipe } from './remove-br.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        DescriptionPipe,
        CompactAppComponent,
        ListAppComponent,
        CompactCardComponent,
        RatingPipe,
        LengthPipe,
        FilterComponent,
        TagComponent,
        FilterPipe,
        TakePipe,
        NavbarComponent,
        CreditsComponent,
        TripsComponent,
        OldTripComponent,
        TripComponent,
        UncategorizedPipe,
        BasicStopComponent,
        ConnectionStopComponent,
        RemoveBrPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
