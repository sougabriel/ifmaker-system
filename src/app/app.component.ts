import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  logado: boolean = false;

  constructor (private localStorage: LocalStorageService) {
    
  }
  
  logar(): boolean {
    if (this.localStorage.get('usuario') == null) {
      this.logado = false;
      return false;
    } else {
      this.logado = true;
      return true;
    }
  }
  
}
