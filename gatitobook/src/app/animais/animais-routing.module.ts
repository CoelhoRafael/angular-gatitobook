import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { ListaDeAnimaisComponent } from './lista-de-animais/lista-de-animais.component';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';

const routes: Routes = [
  {
    path:'',
    component: ListaDeAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver,
    },
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  },
  {
    path:':animalId',
    component: DetalheAnimalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
