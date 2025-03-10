import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBasicComponent } from './rating-basic.component';

describe('RatingBasicComponent', () => {
  let component: RatingBasicComponent;
  let fixture: ComponentFixture<RatingBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
