import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent {
  list: string[];
  menu: boolean = true;

  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private mensagem: MensagensService
  ) {
    this.list = [
      'acesso',
      'emprestimo',
      'material',
      'pessoa',
      'projeto',
      'usuario',
    ];
  }

  ngOnInit() {
    if (this.localStorage.get('usuario') == null) {
      this.mensagem.adicionar('Necessario efetuar login para acessar! ');
      this.router.navigate(['/entrar']);
    }
  }

  sair() {
    this.localStorage.clear();
    this.mensagem.adicionar('Você saiu do sistema! ');
    this.router.navigate(['/inicio']);
  }
}
