import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../services/local-storage/local-storage-service";
import {ChuckNorrisJoke} from "../services/chuck-norris/chuck-norris-joke";

@Component({
  selector: 'app-chuck-norris-favourites',
  templateUrl: './chuck-norris-favourites.component.html',
  styleUrls: ['./chuck-norris-favourites.component.less']
})
export class ChuckNorrisFavouritesComponent implements OnInit {

  listOfFavourites: ChuckNorrisJoke[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.listOfFavourites = this.localStorageService.get("list_of_favourites");
  }

}
