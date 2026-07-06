import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckboxTs } from './custom-checkbox.js';

describe('CustomCheckboxTs', () => {
  let component: CustomCheckboxTs;
  let fixture: ComponentFixture<CustomCheckboxTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCheckboxTs],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCheckboxTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
