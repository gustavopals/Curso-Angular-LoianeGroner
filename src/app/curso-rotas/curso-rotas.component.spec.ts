import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoRotasComponent } from './curso-rotas.component';

describe('CursoRotasComponent', () => {
  let component: CursoRotasComponent;
  let fixture: ComponentFixture<CursoRotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoRotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
