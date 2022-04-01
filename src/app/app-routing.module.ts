import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:"heroes", component:HeroesComponent},
  {path:"datagrid", component:DatagridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
