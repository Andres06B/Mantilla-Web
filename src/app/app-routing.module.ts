import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { VdisenoComponent } from './Pages/landing/view/vdiseno/vdiseno.component';
import { MdigitalComponent } from './Pages/landing/view/mdigital/mdigital.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'Landing',component: LandingComponent},
  {path:'diseño', component:VdisenoComponent},
  {path:'Mdigital', component:MdigitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
