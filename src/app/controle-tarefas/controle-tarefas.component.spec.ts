import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleTarefasComponent } from './controle-tarefas.component';

describe('ControleTarefasComponent', () => {
  let component: ControleTarefasComponent;
  let fixture: ComponentFixture<ControleTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
