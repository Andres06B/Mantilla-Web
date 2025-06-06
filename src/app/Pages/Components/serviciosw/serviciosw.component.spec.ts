import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioswComponent } from './serviciosw.component';

describe('ServicioswComponent', () => {
  let component: ServicioswComponent;
  let fixture: ComponentFixture<ServicioswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicioswComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
