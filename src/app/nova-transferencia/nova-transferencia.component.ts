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

  // Este é o objeto responsável de emitir os dados para o app.component
  // Ele foi instanciado como um emissor de eventos (no caso, ao clicar no botão)
  // do tipo any. É interessante rever essa tipagem posterior mente para um
  // evitar falta de clareza sobre que tipo de objeto está sendo transmitido
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
        destino: this.destino,
        data: new Date()
      }
    );

    this.limparCampos();
  }
  limparCampos() {
    this.valor = null;
    this.destino = null;
  }

}
