import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaCustoViagemComponent } from './calcula-custo-viagem.component';

describe('CalculaCustoViagemComponent', () => {
  let component: CalculaCustoViagemComponent;
  let fixture: ComponentFixture<CalculaCustoViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaCustoViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaCustoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
