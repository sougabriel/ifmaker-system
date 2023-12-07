import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Projeto } from 'src/app/sistema/interfaces/projeto';
import { Usuario } from 'src/app/sistema/interfaces/usuario';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { ProjetoService } from 'src/app/sistema/services/routes/projeto.service';

@Component({
  selector: 'app-atualizar-projeto',
  templateUrl: './atualizar-projeto.component.html',
  styleUrls: ['./atualizar-projeto.component.less'],
})
export class AtualizarProjetoComponent {
  projetoForm!: FormGroup;
  usuarioLogado: Usuario = this.localStorage.get('usuario')[0];

  constructor(
    public atualizar: AtualizarService,
    private projetoService: ProjetoService,
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
    this.projetoForm = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(),
      descricao: new FormControl(),
    });
  }

  get id() {
    return this.projetoForm.get('id');
  }

  get nome() {
    return this.projetoForm.get('nome')!;
  }

  get descricao() {
    return this.projetoForm.get('descricao')!;
  }

  submit() {
    if (this.projetoForm.invalid) {
      return;
    }
    this.atualizarProjeto(this.projetoForm.value);
  }

  async atualizarProjeto(projeto: Projeto) {
    const formData = new FormData();

    if (projeto.nome == null) {
      formData.append('nome', this.atualizar.projeto.nome);
    } else {
      formData.append('nome', projeto.nome);
    }
    if (projeto.descricao == null) {
      formData.append('descricao', projeto.descricao!);
    } else {
      formData.append('descricao', projeto.descricao!);
    }

    await this.projetoService
      .atualizar(this.atualizar.projeto.id!, formData)
      .subscribe();
    this.atualizar.limpar();
  }

  async removeProjeto(id: number) {
    if (confirm('Tenha cuidado ao remover e certeza do que está fazendo!')) {
      await this.projetoService.removerPorId(id).subscribe((x) => (this.testarRemoção(x)));
    } else {
      return;
    }
  }

  testarRemoção(projeto: Projeto) {
    if (projeto == null) {
      this.mensagem.adicionar('Não foi possível excluir projeto!');
    } else {
      this.mensagem.adicionar('Projeto excluído com sucesso!');
    }
  }

}
