import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Pessoa } from 'src/app/sistema/interfaces/pessoa';
import { Usuario } from 'src/app/sistema/interfaces/usuario';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { PessoaService } from 'src/app/sistema/services/routes/pessoa.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.less'],
})
export class AtualizarPessoaComponent {
  pessoaForm!: FormGroup;
  usuarioLogado: Usuario = this.localStorage.get('usuario')[0];

  constructor(
    public atualizar: AtualizarService,
    private pessoaService: PessoaService,
    private localStorage: LocalStorageService,
    private mensagem: MensagensService
  ) {}

  verificaNivel(): boolean {
    if (this.usuarioLogado.nivel == 1) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(),
      email: new FormControl(),
      telefone: new FormControl(),
      publico: new FormControl(),
    });
  }

  get id() {
    return this.pessoaForm.get('id');
  }

  get nome() {
    return this.pessoaForm.get('nome')!;
  }

  get email() {
    return this.pessoaForm.get('email')!;
  }

  get telefone() {
    return this.pessoaForm.get('telefone')!;
  }

  get publico() {
    return this.pessoaForm.get('publico')!;
  }

  submit() {
    if (this.pessoaForm.invalid) {
      return;
    }
    this.atualizarPessoa(this.pessoaForm.value);
  }

  async atualizarPessoa(pessoa: Pessoa) {
    const formData = new FormData();

    if (pessoa.nome == null) {
      formData.append('nome', this.atualizar.pessoa.nome);
    } else {
      formData.append('nome', pessoa.nome);
    }
    if (pessoa.email == null) {
      formData.append('email', this.atualizar.pessoa.email);
    } else {
      formData.append('email', pessoa.email);
    }
    if (pessoa.telefone == null) {
      formData.append('telefone', this.atualizar.pessoa.telefone as any);
    } else {
      formData.append('telefone', pessoa.telefone as any);
    }
    if (pessoa.publico == null) {
      formData.append('publico', this.atualizar.pessoa.publico);
    } else {
      formData.append('publico', pessoa.publico);
    }

    await this.pessoaService
      .atualizar(this.atualizar.pessoa.id!, formData)
      .subscribe();

    this.atualizar.limpar();
  }

  async removePessoa(id: number) {
    if (confirm('Tenha cuidado ao remover e certeza do que está fazendo!')) {
      await this.pessoaService.removerPorId(id).subscribe((x) => (this.testarRemoção(x)));
    } else {
      return;
    }
  }

  testarRemoção(pessoa: Pessoa) {
    if (pessoa == null) {
      this.mensagem.adicionar('Não foi possível excluir pessoa!');
    } else {
      this.mensagem.adicionar('Pessoa excluído com sucesso!');
    }
  }
}
