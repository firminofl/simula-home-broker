import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Início'
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'home-broker',
        loadChildren: './home-broker/home-broker.module#HomeBrokerModule',
        data: {
          title: 'Home-broker',
        }
      }
    ]
  },

  {
    path: 'tesouro-direto',
    loadChildren: './tesouro-direto/tesouro-direto.module#TesouroDiretoModule',
    data: {
      title: 'Tesouro Direto'
    }
  },

  {
    path: 'carteira',
    loadChildren: './carteira/carteira.module#CarteiraModule',
    data: {
      title: 'Carteira'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
