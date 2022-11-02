import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTransferencias: any[];

  constructor() 
  {
    this.listaDeTransferencias = [];
  }

  get transferencias()
  {
    return this.listaDeTransferencias;
  }

  adicionarTransferencia(transferencia: any)
  {
    this.listaDeTransferencias.push(transferencia);
  }
}
