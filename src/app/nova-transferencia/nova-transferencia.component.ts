import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component
(
  {
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
  }
)
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  transferir ()
  {
    this.aoTransferir.emit
    (
      {
        valor: this.valor,
        destino: this.destino
      }
    );

    this.limparCampos();
  }
  limparCampos() {
    this.valor = null;
    this.destino = null;
  }

}
