import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ScreenerComponent } from './Pages/screener/screener.component';
import { BackTestComponent } from './Pages/back-test/back-test.component';
import { Nr7Component } from './Components/screener/nr7/nr7.component';

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},
  {path:'screener', component:ScreenerComponent},
  {path:'backtest',component:BackTestComponent},
  {path:'nr7',component:Nr7Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
