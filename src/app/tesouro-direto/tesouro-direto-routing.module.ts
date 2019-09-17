import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesouroDiretoComponent } from './tesouro-direto.component';

const routes: Routes = [{
  path: '',
  component: TesouroDiretoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesouroDiretoRoutingModule { }
