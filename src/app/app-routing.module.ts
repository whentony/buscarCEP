import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BuscarCEPComponent} from './buscar-cep/buscar-cep.component';
import {ContatoComponent} from './contato/contato.component';

const routes: Routes = [
  {path: '', component: BuscarCEPComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
