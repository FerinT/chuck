import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ChuckNorrisListComponent } from './chuck-norris-list/chuck-norris-list.component';
import { ChuckNorrisFavouritesComponent } from './chuck-norris-favourites/chuck-norris-favourites.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {LocalStorageService} from "./services/local-storage/local-storage-service";

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisListComponent,
    ChuckNorrisFavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
