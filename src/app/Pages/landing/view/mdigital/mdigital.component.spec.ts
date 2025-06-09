import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdigitalComponent } from './mdigital.component';

describe('MdigitalComponent', () => {
  let component: MdigitalComponent;
  let fixture: ComponentFixture<MdigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
