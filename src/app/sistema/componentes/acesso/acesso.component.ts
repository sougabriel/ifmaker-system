import { Component } from '@angular/core';
import { Acesso } from '../../interfaces/acesso';
import { AcessoService } from '../../services/routes/acesso.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.less']
})
export class AcessoComponent {

  acessos: Acesso[] = [];

  constructor (private acessoService: AcessoService) {
    this.getAcessos();
  }

  removeAcesso(id: number) {
    this.acessos = this.acessos.filter((a) => id !== a.id);
    this.acessoService.removerPorId(id).subscribe();
  }

  getAcessos(): void {
    this.acessoService.consultarTodos().subscribe((acessos) => (this.acessos = acessos));
  }

}
