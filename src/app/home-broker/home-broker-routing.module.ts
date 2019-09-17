import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBrokerComponent } from './home-broker.component';

const routes: Routes = [{
  path: '',
  component: HomeBrokerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeBrokerRoutingModule { }
