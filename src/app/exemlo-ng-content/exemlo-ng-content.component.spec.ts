import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemloNgContentComponent } from './exemlo-ng-content.component';

describe('ExemloNgContentComponent', () => {
  let component: ExemloNgContentComponent;
  let fixture: ComponentFixture<ExemloNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemloNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemloNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
