import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbcPagePage } from './kbc-page.page';

describe('KbcPagePage', () => {
  let component: KbcPagePage;
  let fixture: ComponentFixture<KbcPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbcPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbcPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
