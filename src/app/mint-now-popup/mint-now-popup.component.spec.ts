import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintNowPopupComponent } from './mint-now-popup.component';

describe('MintNowPopupComponent', () => {
  let component: MintNowPopupComponent;
  let fixture: ComponentFixture<MintNowPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintNowPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintNowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
