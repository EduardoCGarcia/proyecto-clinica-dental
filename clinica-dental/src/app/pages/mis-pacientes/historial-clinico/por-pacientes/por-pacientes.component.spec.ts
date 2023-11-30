import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPacientesComponent } from './por-pacientes.component';

describe('PorPacientesComponent', () => {
  let component: PorPacientesComponent;
  let fixture: ComponentFixture<PorPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorPacientesComponent]
    });
    fixture = TestBed.createComponent(PorPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
