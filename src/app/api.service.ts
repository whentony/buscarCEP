import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  Api(dados: any, api: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = 'https://viacep.com.br/ws/' + dados + '/json/';

    return this.http.get(url, httpOptions).map(res => res);
  }
}
