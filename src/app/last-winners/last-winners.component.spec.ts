import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWinnersComponent } from './last-winners.component';

describe('LastWinnersComponent', () => {
  let component: LastWinnersComponent;
  let fixture: ComponentFixture<LastWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWinnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
