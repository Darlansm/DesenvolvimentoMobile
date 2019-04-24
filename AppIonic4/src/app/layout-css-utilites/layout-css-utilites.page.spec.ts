import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCssUtilitesPage } from './layout-css-utilites.page';

describe('LayoutCssUtilitesPage', () => {
  let component: LayoutCssUtilitesPage;
  let fixture: ComponentFixture<LayoutCssUtilitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCssUtilitesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCssUtilitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
