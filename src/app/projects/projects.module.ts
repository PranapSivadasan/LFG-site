import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { SpotLightArtistComponent } from './spot-light-artist/spot-light-artist.component';
import { FundraiserProjectComponent } from './fundraiser-project/fundraiser-project.component';

const Route: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    pathMatch: 'full'
  },
  {
    path: 'sla',
    component: SpotLightArtistComponent
  },
  {
    path: 'fundraiser',
    component: FundraiserProjectComponent
  }
];

@NgModule({
  declarations: [ProjectsComponent, SpotLightArtistComponent, FundraiserProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Route)
  ]
})
export class ProjectsModule { }
