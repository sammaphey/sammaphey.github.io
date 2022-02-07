import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: '**', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
