import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPacientesComponent } from './vista-pacientes.component';

describe('VistaPacientesComponent', () => {
  let component: VistaPacientesComponent;
  let fixture: ComponentFixture<VistaPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPacientesComponent]
    });
    fixture = TestBed.createComponent(VistaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
