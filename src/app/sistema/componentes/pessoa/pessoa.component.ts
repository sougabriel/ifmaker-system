import { Component, EventEmitter, Output } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa';
import { PessoaService } from '../../services/routes/pessoa.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.less']
})
export class PessoaComponent {

  pessoas: Pessoa[] = [];

  constructor (private pessoaService: PessoaService, private atualizar: AtualizarService) {
    this.getPessoas();
  }

  recaregarTabela(): void {
    this.getPessoas();
  }

  editarPessoa(pessoa: Pessoa) {
    this.atualizar.alterarPessoa(pessoa);
  }

  getPessoas(): void {
    this.pessoaService.consultarTodos().subscribe((pessoas) => (this.pessoas = pessoas));
  }

}
