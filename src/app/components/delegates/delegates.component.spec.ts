import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatesComponent } from './delegates.component';

describe('DelegatesComponent', () => {
  let component: DelegatesComponent;
  let fixture: ComponentFixture<DelegatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegatesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
