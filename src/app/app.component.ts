import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';
import { MensagensService } from './services/mensagens.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  logado: boolean = false;

  constructor (private localStorage: LocalStorageService, private router: Router, private mensagem: MensagensService) {
    if (this.localStorage.get('usuario') !== null) {
      this.mensagem.adicionar('Logado automaticamente');
      this.router.navigate(['/sistema/pessoa']);
    }
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
