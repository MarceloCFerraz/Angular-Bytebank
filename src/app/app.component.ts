import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ByteBank';

  constructor (private _transferenciaService: TransferenciaService)
  { }

  transferir ($event)
  {
    this._transferenciaService.adicionarTransferencia($event);
  }
}
