import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootChildComponent } from './root-child.component';

describe('RootChildComponent', () => {
  let component: RootChildComponent;
  let fixture: ComponentFixture<RootChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
