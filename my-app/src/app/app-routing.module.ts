import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CategorizeComponent } from './Component/categorize/categorize.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AboutComponent } from './Component/about/about.component';
import { OthersComponent } from './Component/others/others.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  {path:'categorize' ,component:CategorizeComponent},
  {path:'dashboard' ,component:DashboardComponent},
  {path:'home'  ,component:HomeComponent},
  {path:'about'  ,component:AboutComponent},
  {path:'others'  ,component:OthersComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
