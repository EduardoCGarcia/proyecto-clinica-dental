import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosTratamientosComponent } from './todos-los-tratamientos.component';

describe('TodosLosTratamientosComponent', () => {
  let component: TodosLosTratamientosComponent;
  let fixture: ComponentFixture<TodosLosTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosLosTratamientosComponent]
    });
    fixture = TestBed.createComponent(TodosLosTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
