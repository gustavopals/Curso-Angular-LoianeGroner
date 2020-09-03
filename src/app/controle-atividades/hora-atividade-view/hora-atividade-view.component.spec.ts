import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraAtividadeViewComponent } from './hora-atividade-view.component';

describe('HoraAtividadeViewComponent', () => {
  let component: HoraAtividadeViewComponent;
  let fixture: ComponentFixture<HoraAtividadeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraAtividadeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraAtividadeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
