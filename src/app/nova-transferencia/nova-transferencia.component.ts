import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router';

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
  
  constructor
  (
    private _transferenciaService: TransferenciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  transferir ()
  {
    const transferencia: Transferencia = this.getTransferencia(); 
    
    this._transferenciaService
    .adicionarTransferencia(transferencia)
    .subscribe(
    {
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        alert("Sua transferência foi realizada com sucesso! Para acessar o histórico de transferências, acesse a aba 'Extrato' no cabeçalho da página.")
      },
    });
    this.limparCampos();
    // caso queira que o usuário seja redirecionado para
    // a página de extrato automaticamente, descomente a
    // linha abaixo
    // this.router.navigateByUrl("extrato");
  }

  getTransferencia(){
    const transferencia: Transferencia = 
    {
      valor: this.valor,
      destino: this.destino,
      data: new Date()
    };

    return transferencia;
  }


  limparCampos() 
  {
    this.valor = null;
    this.destino = null;
  }

}
