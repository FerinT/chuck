import { Component, OnInit } from '@angular/core';
import {ChuckNorrisService} from "../services/chuck-norris/chuck-norris-service";
import {ChuckNorrisJoke} from "../services/chuck-norris/chuck-norris-joke";
import {LocalStorageService} from "../services/local-storage/local-storage-service";

@Component({
  selector: 'app-chuck-norris-list',
  templateUrl: './chuck-norris-list.component.html',
  styleUrls: ['./chuck-norris-list.component.less']
})
export class ChuckNorrisListComponent implements OnInit {

  listOfChuckNorrisJokes: ChuckNorrisJoke[] = [];

  constructor(private chuckNorrisService: ChuckNorrisService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.populateList();
    // start timer every 5 seconds
    // remove the first joke
    // fetch a new joke
    // add it to the end
  }

  clearListOfJokes(): void {

  }

  private populateList(): void {
    // clear list
    this.listOfChuckNorrisJokes = [];

    //re-populate with 10 jokes
    for (let i = 0; i < 10; i++) {
      this.getJoke();
    }

  }

  private getJoke(): void {
    this.chuckNorrisService.getJoke()
      .subscribe(response => {
         this.listOfChuckNorrisJokes.push(response);
      });
  }

  addFavourite(newFavourite: ChuckNorrisJoke): void {
    // get list of fav
    // validate if its > 10
      // if so remove the first and add to the back
    // check for duplicates?
    // can't fetch jokes via endpoint with id?
    let listOfFavourites: ChuckNorrisJoke[] = this.localStorageService.get("list_of_favourites");

    // rather do Ternary operation above
    if(listOfFavourites === null) {
      listOfFavourites = [];
    }
    if(listOfFavourites.length >= 10){
      listOfFavourites.shift();
    }
    listOfFavourites.push(newFavourite);
    this.localStorageService.set("list_of_favourites", listOfFavourites);
  }

}
