import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well/well.component';

const routes: Routes = [
  {path:"well-list", component: WellListComponent},
  { path: '', redirectTo: '/well-list', pathMatch: 'full' },
  {path:'well',component:WellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
