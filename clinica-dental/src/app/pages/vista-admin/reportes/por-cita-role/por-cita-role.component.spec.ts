import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCitaRoleComponent } from './por-cita-role.component';

describe('PorCitaRoleComponent', () => {
  let component: PorCitaRoleComponent;
  let fixture: ComponentFixture<PorCitaRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorCitaRoleComponent]
    });
    fixture = TestBed.createComponent(PorCitaRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
