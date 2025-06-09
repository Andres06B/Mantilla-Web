import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdisenoComponent } from './vdiseno.component';

describe('VdisenoComponent', () => {
  let component: VdisenoComponent;
  let fixture: ComponentFixture<VdisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VdisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
