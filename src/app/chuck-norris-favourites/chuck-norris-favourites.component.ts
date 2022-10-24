import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../services/local-storage/local-storage-service";
import {ChuckNorrisJoke} from "../services/chuck-norris/chuck-norris-joke";
import {systemSettings} from "../shared/system-settings";

@Component({
  selector: 'app-chuck-norris-favourites',
  templateUrl: './chuck-norris-favourites.component.html',
  styleUrls: ['./chuck-norris-favourites.component.less']
})
export class ChuckNorrisFavouritesComponent implements OnInit {

  listOfFavourites: ChuckNorrisJoke[] = [];

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.listOfFavourites = this.localStorageService.get(systemSettings.CACHE_FAVOURITES);
  }

  unfavourite(id: string): void {
    this.listOfFavourites = this.listOfFavourites.filter((chuckNorrisJoke) => {
      return chuckNorrisJoke.id != id;
    });

    this.localStorageService.set(systemSettings.CACHE_FAVOURITES, this.listOfFavourites);
  }

}
