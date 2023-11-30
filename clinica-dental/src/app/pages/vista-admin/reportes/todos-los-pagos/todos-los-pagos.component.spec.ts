import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosPagosComponent } from './todos-los-pagos.component';

describe('TodosLosPagosComponent', () => {
  let component: TodosLosPagosComponent;
  let fixture: ComponentFixture<TodosLosPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosLosPagosComponent]
    });
    fixture = TestBed.createComponent(TodosLosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
