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
        TakePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
