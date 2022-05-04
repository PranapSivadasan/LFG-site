import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserProjectComponent } from './fundraiser-project.component';

describe('FundraiserProjectComponent', () => {
  let component: FundraiserProjectComponent;
  let fixture: ComponentFixture<FundraiserProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundraiserProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
