import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ByteBank';

  transferencias: any[] = [];

  transferir ($event)
  {
    const transferencia = 
    {
      /*
        Através deste operador, que é o spread operator, eu estou desconstruindo esse objeto $event. 
        Ou seja, se estão chegando duas propriedades, que são valor e destino, ao invés de pegar
        o objeto e passar para dentro de transferencia estou pegando apenas as propriedades internas
        dele e passando para dentro do objeto transferencia.
        */
      ...$event,
      data: new Date()
    };
    this.transferencias.push(transferencia);
  }
}
