import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectComponent } from './project/project.component';
import { SpotLightArtistsComponent } from './spot-light-artists/spot-light-artists.component';

const Route: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
    // loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'sla',
    component: SpotLightArtistsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    CopyrightsComponent,
    TeamComponent,
    GalleryComponent,
    ProjectComponent,
    SpotLightArtistsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Route)
  ],
  providers: [],
  exports: [NavigationBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
