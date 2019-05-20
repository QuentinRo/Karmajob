import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigJobsListsPage } from './big-jobs-lists.page';

describe('BigJobsListsPage', () => {
  let component: BigJobsListsPage;
  let fixture: ComponentFixture<BigJobsListsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigJobsListsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigJobsListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
