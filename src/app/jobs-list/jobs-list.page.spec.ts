import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListPage } from './jobs-list.page';

describe('JobsListPage', () => {
  let component: JobsListPage;
  let fixture: ComponentFixture<JobsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
