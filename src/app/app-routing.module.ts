import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChuckNorrisFavouritesComponent} from "./chuck-norris-favourites/chuck-norris-favourites.component";
import {ChuckNorrisListComponent} from "./chuck-norris-list/chuck-norris-list.component";

const routes: Routes = [
  {path: "favourites", component: ChuckNorrisFavouritesComponent},
  {path: "", component: ChuckNorrisListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
