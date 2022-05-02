import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

const Route: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Route)
  ]
})
export class ProjectsModule { }
