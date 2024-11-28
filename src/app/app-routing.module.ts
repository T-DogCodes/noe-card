import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompactAppComponent} from "./compact-app/compact-app.component";
import {ListAppComponent} from "./list-app/list-app.component";

const routes: Routes = [
    {path: "", component: ListAppComponent},
    {path: "compact", component: CompactAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
