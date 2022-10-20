import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisListComponent } from './chuck-norris-list.component';
import {LocalStorageService} from "../services/local-storage/local-storage-service";
import {HttpClientModule} from "@angular/common/http";

describe('ChuckNorrisListComponent', () => {
  let component: ChuckNorrisListComponent;
  let fixture: ComponentFixture<ChuckNorrisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ChuckNorrisListComponent ],
      providers: [LocalStorageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuckNorrisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
