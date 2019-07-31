import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaItemPage } from './agenda-item.page';

describe('AgendaItemPage', () => {
  let component: AgendaItemPage;
  let fixture: ComponentFixture<AgendaItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
