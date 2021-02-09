import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuscarCEPComponent} from './buscar-cep/buscar-cep.component';

const routes: Routes = [{
  path: '', component: BuscarCEPComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
