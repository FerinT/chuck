import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisFavouritesComponent } from './chuck-norris-favourites.component';
import {LocalStorageService} from "../services/local-storage/local-storage-service";

describe('ChuckNorrisFavouritesComponent', () => {
  let component: ChuckNorrisFavouritesComponent;
  let fixture: ComponentFixture<ChuckNorrisFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckNorrisFavouritesComponent ],
      providers: [LocalStorageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuckNorrisFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
