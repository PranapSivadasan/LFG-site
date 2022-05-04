import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotLightArtistComponent } from './spot-light-artist.component';

describe('SpotLightArtistComponent', () => {
  let component: SpotLightArtistComponent;
  let fixture: ComponentFixture<SpotLightArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotLightArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotLightArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
