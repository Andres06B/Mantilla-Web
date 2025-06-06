import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwhatsapComponent } from './bwhatsap.component';

describe('BwhatsapComponent', () => {
  let component: BwhatsapComponent;
  let fixture: ComponentFixture<BwhatsapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BwhatsapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BwhatsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
