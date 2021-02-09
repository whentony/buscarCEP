import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarCEPComponent } from './buscar-cep/buscar-cep.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EnderecoComponent } from './endereco/endereco.component';
import {ApiService} from './api.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ContatoComponent } from './contato/contato.component';
import {MatIconModule} from '@angular/material/icon';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    BuscarCEPComponent,
    EnderecoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
