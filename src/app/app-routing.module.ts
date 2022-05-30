import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path:'interpolation',component:InterpolationComponent},
  {path:'property-binding',component:PropertyBindingComponent},
  {path:'class-binding',component:ClassBindingComponent},
  {path:'style-binding',component:StyleBindingComponent},
  {path:'event-binding',component:EventBindingComponent},
  {path:'two-way',component:TwoWayComponent}
  // {path:'',redirectTo:'page',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
