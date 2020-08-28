import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoRotasDetalheComponent } from './curso-rotas-detalhe.component';

describe('CursoRotasDetalheComponent', () => {
  let component: CursoRotasDetalheComponent;
  let fixture: ComponentFixture<CursoRotasDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoRotasDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoRotasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
