import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFavoritPage } from './users-favorit.page';

describe('UsersFavoritPage', () => {
  let component: UsersFavoritPage;
  let fixture: ComponentFixture<UsersFavoritPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFavoritPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFavoritPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
