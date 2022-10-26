import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisFavouritesComponent } from './chuck-norris-favourites.component';
import {LocalStorageService} from "../services/local-storage/local-storage-service";
import {ToastrModule, ToastrService} from "ngx-toastr";

describe('ChuckNorrisFavouritesComponent', () => {
  let component: ChuckNorrisFavouritesComponent;
  let fixture: ComponentFixture<ChuckNorrisFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      declarations: [ ChuckNorrisFavouritesComponent ],
      providers: [LocalStorageService, ToastrService]
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
