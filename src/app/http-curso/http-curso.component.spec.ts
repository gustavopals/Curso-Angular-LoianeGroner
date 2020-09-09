import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCursoComponent } from './http-curso.component';

describe('HttpCursoComponent', () => {
  let component: HttpCursoComponent;
  let fixture: ComponentFixture<HttpCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
