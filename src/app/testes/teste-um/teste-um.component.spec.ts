import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteUmComponent } from './teste-um.component';

describe('TesteUmComponent', () => {
  let component: TesteUmComponent;
  let fixture: ComponentFixture<TesteUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
