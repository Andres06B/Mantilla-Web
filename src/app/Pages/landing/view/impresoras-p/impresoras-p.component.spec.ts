import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresorasPComponent } from './impresoras-p.component';

describe('ImpresorasPComponent', () => {
  let component: ImpresorasPComponent;
  let fixture: ComponentFixture<ImpresorasPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpresorasPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpresorasPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
