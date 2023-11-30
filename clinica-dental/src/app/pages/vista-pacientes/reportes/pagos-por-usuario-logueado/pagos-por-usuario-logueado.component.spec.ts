import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPorUsuarioLogueadoComponent } from './pagos-por-usuario-logueado.component';

describe('PagosPorUsuarioLogueadoComponent', () => {
  let component: PagosPorUsuarioLogueadoComponent;
  let fixture: ComponentFixture<PagosPorUsuarioLogueadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagosPorUsuarioLogueadoComponent]
    });
    fixture = TestBed.createComponent(PagosPorUsuarioLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
