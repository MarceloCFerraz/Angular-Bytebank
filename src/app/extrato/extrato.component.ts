import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  /*
    Esta propriedade recebe do app.component os dados
    da transferência
  */
  @Input() transferencias: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
