import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChuckNorrisJoke} from "./chuck-norris-joke";
import {Observable} from "rxjs";
//import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  private url = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<ChuckNorrisJoke>{
    return this.httpClient.get<ChuckNorrisJoke>(this.url);
      //.pipe(catchError());
  }
}
