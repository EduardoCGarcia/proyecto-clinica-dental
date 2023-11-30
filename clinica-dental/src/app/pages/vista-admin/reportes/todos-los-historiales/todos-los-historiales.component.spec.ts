import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosHistorialesComponent } from './todos-los-historiales.component';

describe('TodosLosHistorialesComponent', () => {
  let component: TodosLosHistorialesComponent;
  let fixture: ComponentFixture<TodosLosHistorialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosLosHistorialesComponent]
    });
    fixture = TestBed.createComponent(TodosLosHistorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
