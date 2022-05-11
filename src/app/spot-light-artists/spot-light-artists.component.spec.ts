import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotLightArtistsComponent } from './spot-light-artists.component';

describe('SpotLightArtistsComponent', () => {
  let component: SpotLightArtistsComponent;
  let fixture: ComponentFixture<SpotLightArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotLightArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotLightArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
