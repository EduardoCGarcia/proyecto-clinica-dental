import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasLasFacturasComponent } from './todas-las-facturas.component';

describe('TodasLasFacturasComponent', () => {
  let component: TodasLasFacturasComponent;
  let fixture: ComponentFixture<TodasLasFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodasLasFacturasComponent]
    });
    fixture = TestBed.createComponent(TodasLasFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
