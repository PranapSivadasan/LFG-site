import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeingMeComponent } from './being-me.component';

describe('BeingMeComponent', () => {
  let component: BeingMeComponent;
  let fixture: ComponentFixture<BeingMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeingMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeingMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
