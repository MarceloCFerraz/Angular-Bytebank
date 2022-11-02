import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTransferencias: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private _httpClient: HttpClient) 
  {
    
  }

  get transferencias()
  {
    return this.listaDeTransferencias;
  }

  getTransferenciasAPI () : Observable<Transferencia[]>
  {
    return this._httpClient.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: Transferencia) : Observable<Transferencia>
  {
    return this._httpClient.post<Transferencia>(this.url, transferencia);
  }
}
