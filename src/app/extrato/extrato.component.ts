import { Component, Input, OnInit } from '@angular/core';
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
    this.transferencias = this._transferenciaService.transferencias;
    console.log(this.transferencias);
  }

}
