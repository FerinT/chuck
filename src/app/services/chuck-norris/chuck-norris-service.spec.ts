import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {ChuckNorrisService} from "./chuck-norris-service";

describe('ChuckNorrisService', () => {
  let injector: TestBed;
  let service: ChuckNorrisService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChuckNorrisService]
    });
    injector = getTestBed();
    service = injector.get(ChuckNorrisService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getJoke', () => {
    it('should return an Observable<User[]>', () => {

      let chuckNorrisJoke = service.getJoke().subscribe(users => {
        console.log(users);
      });

      const req = httpMock.expectOne('https://api.chucknorris.io/jokes/random');
      expect(req.request.method).toBe("GET");
      req.flush(chuckNorrisJoke);
    });
  });

});
