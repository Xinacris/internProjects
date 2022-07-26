import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChild2Component } from './root-child2.component';

describe('RootChild2Component', () => {
  let component: RootChild2Component;
  let fixture: ComponentFixture<RootChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
