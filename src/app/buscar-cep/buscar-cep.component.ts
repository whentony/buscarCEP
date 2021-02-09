import {Component, OnInit, Input} from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCEPComponent implements OnInit {

  cep: string;
  endereco: any = {
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  };
 aux = false;
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  limpar(): void{
    this.aux = false;
    this.cep = '';
  }
  buscarCep(cep: string): any {
  //  console.log(this.cep);
    this.apiService.Api(cep, 'api/contato/').subscribe(data => {
        // @ts-ignore
        console.log(typeof data.logradouro);
        // @ts-ignore
        this.endereco.logradouro = data.logradouro;
        // @ts-ignore
        this.endereco.complemento = data.complemento;
        // @ts-ignore
        this.endereco.bairro = data.bairro;
        // @ts-ignore
        this.endereco.localidade = data.localidade;
        // @ts-ignore
        this.endereco.uf = data.uf;

        console.log(this.endereco);
        this.aux =  true;
      },
      error => {
        console.log(error);
      });


  }
}
