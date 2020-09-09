import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploFormReativoComponent } from './exemplo-form-reativo.component';

describe('ExemploFormReativoComponent', () => {
  let component: ExemploFormReativoComponent;
  let fixture: ComponentFixture<ExemploFormReativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploFormReativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploFormReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
