import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorMotivoComponent } from './por-motivo.component';

describe('PorMotivoComponent', () => {
  let component: PorMotivoComponent;
  let fixture: ComponentFixture<PorMotivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorMotivoComponent]
    });
    fixture = TestBed.createComponent(PorMotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
