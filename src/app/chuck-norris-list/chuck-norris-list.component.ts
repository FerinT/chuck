import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChuckNorrisService} from "../services/chuck-norris/chuck-norris-service";
import {ChuckNorrisJoke} from "../services/chuck-norris/chuck-norris-joke";
import {LocalStorageService} from "../services/local-storage/local-storage-service";
import {NgxSpinnerService} from "ngx-spinner";
import {systemSettings} from "../shared/system-settings";


@Component({
  selector: 'app-chuck-norris-list',
  templateUrl: './chuck-norris-list.component.html',
  styleUrls: ['./chuck-norris-list.component.less']
})
export class ChuckNorrisListComponent implements OnInit, OnDestroy {

  listOfChuckNorrisJokes: ChuckNorrisJoke[] = [];

  private interval: any;

  constructor(private chuckNorrisService: ChuckNorrisService,
              private localStorageService: LocalStorageService,
              private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.populateList();

    this.interval = setInterval(() => {
      this.getJoke()
    }, 5 * 1000);

  }

  private populateList(): void {
    this.spinnerService.show();
    // clear list
    this.listOfChuckNorrisJokes = [];

    //re-populate with 10 jokes
    for (let i = 0; i < systemSettings.MAX_JOKES; i++) {
      this.getJoke();
    }
    this.spinnerService.hide();

  }

  private getJoke(): void {
    this.chuckNorrisService.getJoke()
      .subscribe(response => {
        if (this.listOfChuckNorrisJokes.length >= systemSettings.MAX_JOKES) {
          this.listOfChuckNorrisJokes.shift();
        }
        this.listOfChuckNorrisJokes.push(response);
      });
  }

  addFavourite(newFavourite: ChuckNorrisJoke): void {
    // get list of fav
    // validate if its > 10
    // if so remove the first and add to the back
    let listOfFavourites: ChuckNorrisJoke[] = this.localStorageService.get(systemSettings.CACHE_FAVOURITES);
    // rather do Ternary operation above
    if (listOfFavourites === null ) {
      listOfFavourites = [];
    }
    if (!this.validateDuplicateLikes(newFavourite, listOfFavourites)) {

      if (listOfFavourites.length >= systemSettings.MAX_JOKES) {
        listOfFavourites.shift();
      }
      listOfFavourites.push(newFavourite);
      this.localStorageService.set(systemSettings.CACHE_FAVOURITES, listOfFavourites);

      // remove joke from list and add a new one
      this.removeJokeFromList(newFavourite);
      this.getJoke();
    }
  }

  removeJokeFromList(newFavourite: ChuckNorrisJoke): void {
    this.listOfChuckNorrisJokes = this.listOfChuckNorrisJokes.filter((chuckNorrisJoke) => {
      return chuckNorrisJoke.id != newFavourite.id;
    });
  }

  validateDuplicateLikes(newFavourite: ChuckNorrisJoke, listOfFavourites: ChuckNorrisJoke[]): boolean {
    return listOfFavourites.includes(newFavourite, 0);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
