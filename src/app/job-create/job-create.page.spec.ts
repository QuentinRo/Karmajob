import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCreatePage } from './job-create.page';

describe('JobCreatePage', () => {
  let component: JobCreatePage;
  let fixture: ComponentFixture<JobCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
