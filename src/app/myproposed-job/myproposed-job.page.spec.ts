import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproposedJobPage } from './myproposed-job.page';

describe('MyproposedJobPage', () => {
  let component: MyproposedJobPage;
  let fixture: ComponentFixture<MyproposedJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproposedJobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproposedJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
