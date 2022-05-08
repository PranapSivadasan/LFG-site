import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';

const Route: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
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
    GalleryComponent
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
