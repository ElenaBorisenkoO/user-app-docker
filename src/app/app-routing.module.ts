import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { ReposComponent } from './pages/user/repos/repos.component';
import { NotAllowedGuard } from './core/guards/not-allowed.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/:name',
    component: UserComponent,
    canActivateChild: [NotAllowedGuard],
    children: [
      { path: ':repos', component: ReposComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
