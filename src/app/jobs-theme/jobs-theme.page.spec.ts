import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsThemePage } from './jobs-theme.page';

describe('JobsThemePage', () => {
  let component: JobsThemePage;
  let fixture: ComponentFixture<JobsThemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsThemePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
