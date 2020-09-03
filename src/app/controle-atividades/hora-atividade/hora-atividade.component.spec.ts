import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraAtividadeComponent } from './hora-atividade.component';

describe('HoraAtividadeComponent', () => {
  let component: HoraAtividadeComponent;
  let fixture: ComponentFixture<HoraAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
