import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  logado: boolean = false;

  constructor (private localStorage: LocalStorageService) {}
  
  logar() {
    this.logado = true;
  }

}
