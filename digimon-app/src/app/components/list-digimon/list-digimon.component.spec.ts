import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDigimonComponent } from './list-digimon.component';

describe('ListDigimonComponent', () => {
  let component: ListDigimonComponent;
  let fixture: ComponentFixture<ListDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});