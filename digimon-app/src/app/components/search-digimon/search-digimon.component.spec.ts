import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDigimonComponent } from './search-digimon.component';

describe('SearchDigimonComponent', () => {
  let component: SearchDigimonComponent;
  let fixture: ComponentFixture<SearchDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});