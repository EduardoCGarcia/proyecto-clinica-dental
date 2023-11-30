import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotasLasCitasComponent } from './totas-las-citas.component';

describe('TotasLasCitasComponent', () => {
  let component: TotasLasCitasComponent;
  let fixture: ComponentFixture<TotasLasCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotasLasCitasComponent]
    });
    fixture = TestBed.createComponent(TotasLasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
