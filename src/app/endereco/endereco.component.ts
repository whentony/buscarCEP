import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnChanges {
  @Input() pegarEndereco: any = {
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: ''
  };

  constructor() { }

  ngOnChanges(): void {
    console.log(this.pegarEndereco.logradouro);
    console.log(this.pegarEndereco.complemento);
    console.log(this.pegarEndereco.bairro);
    console.log(this.pegarEndereco.localidade);
    console.log(this.pegarEndereco.uf);
  }

}
