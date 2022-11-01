import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  /*
    Esta propriedade recebe do app.component os dados
    da transferência
  */
  @Input() transferencia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
