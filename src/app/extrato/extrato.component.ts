import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  /*
    @Input() transferencias: any[];
    Esta propriedade recebe do app.component os dados
    da transferência
  */

  transferencias: any[];

  constructor(private _transferenciaService: TransferenciaService) { }

  ngOnInit() 
  {
    this._transferenciaService
    .getTransferenciasAPI()
    .subscribe((transferencias: Transferencia[]) => 
    {
      this.transferencias = transferencias;
    });
    console.log(this.transferencias);
  }

}
