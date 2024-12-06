import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompactAppComponent} from "./compact-app/compact-app.component";
import {ListAppComponent} from "./list-app/list-app.component";
import {CreditsComponent} from "./credits/credits.component";
import {TripsComponent} from "./trips/trips.component";
import {TripComponent} from "./trip/trip.component";

const routes: Routes = [
    {path: "", component: ListAppComponent},
    {path: "compact", component: CompactAppComponent},
    {path: "credits", component: CreditsComponent},
    {path: "trips", component: TripsComponent},
    {path: "trip/:id", component: TripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
