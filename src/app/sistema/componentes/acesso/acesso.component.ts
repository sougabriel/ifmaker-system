import { Component } from '@angular/core';
import { Acesso } from '../../interfaces/acesso';
import { AcessoService } from '../../services/routes/acesso.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.less']
})
export class AcessoComponent {

  acessos: Acesso[] = [];

  constructor (private acessoService: AcessoService, private atualizar: AtualizarService) {
    this.getAcessos();
  }

  editarAcesso(acesso: Acesso) {
    this.atualizar.alterarAcesso(acesso);
  }

  removeAcesso(id: number) {
    this.acessos = this.acessos.filter((a) => id !== a.id);
    this.acessoService.removerPorId(id).subscribe();
  }

  getAcessos(): void {
    this.acessoService.consultarTodos().subscribe((acessos) => (this.acessos = acessos));
  }

}
