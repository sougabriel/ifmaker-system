import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Emprestimo } from 'src/app/sistema/interfaces/emprestimo';
import { Usuario } from 'src/app/sistema/interfaces/usuario';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { EmprestimoService } from 'src/app/sistema/services/routes/emprestimo.service';

@Component({
  selector: 'app-atualizar-emprestimo',
  templateUrl: './atualizar-emprestimo.component.html',
  styleUrls: ['./atualizar-emprestimo.component.less'],
})
export class AtualizarEmprestimoComponent {
  
  emprestimoForm!: FormGroup;
  usuarioLogado: Usuario = this.localStorage.get('usuario')[0];

  constructor(
    public atualizar: AtualizarService,
    private emprestimoService: EmprestimoService,
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
    this.emprestimoForm = new FormGroup({
      dataInicial: new FormControl(),
      dataFinal: new FormControl(),
      finalidade: new FormControl(),
      quantidade: new FormControl(),
      materialId: new FormControl({value: null, disabled: true}),
      pessoaId: new FormControl({value: null, disabled: true}),
    });
  }

  get dataInicial() {
    return this.emprestimoForm.get('dataInicial')!;
  }

  get dataFinal() {
    return this.emprestimoForm.get('dataFinal')!;
  }

  get finalidade() {
    return this.emprestimoForm.get('finalidade')!;
  }

  get quantidade() {
    return this.emprestimoForm.get('quantidade')!;
  }

  get materialId() {
    return this.emprestimoForm.get('materialId')!;
  }

  get pessoaId() {
    return this.emprestimoForm.get('pessoaId')!;
  }

  submit() {
    if (this.emprestimoForm.invalid) {
      return;
    }
    this.atualizarEmprestimo(this.emprestimoForm.value);
  }

  async atualizarEmprestimo(emprestimo: Emprestimo) {
    const formData = new FormData();

    if (emprestimo.dataInicial == null) {
      formData.append('dataInicial', this.atualizar.emprestimo.dataInicial as any);
    } else {
      formData.append('dataInicial', emprestimo.dataInicial as any);
    }
    if (emprestimo.dataFinal == null) {
      formData.append('dataFinal', this.atualizar.emprestimo.dataFinal as any);
    } else {
      formData.append('dataFinal', emprestimo.dataFinal as any);
    }
    if (emprestimo.finalidade == null) {
      formData.append('finalidade', this.atualizar.emprestimo.finalidade!);
    } else {
      formData.append('finalidade', emprestimo.finalidade!);
    }
    if (emprestimo.quantidade == null) {
      formData.append('quantidade', 1 as any);
    } else {
      formData.append('quantidade', emprestimo.quantidade as any);
    }
    if (emprestimo.materialId == null) {
      formData.append('materialId', this.atualizar.emprestimo.materialId as any);
    } else {
      formData.append('materialId', emprestimo.materialId as any);
    }
    if (emprestimo.pessoaId == null) {
      formData.append('pessoaId', this.atualizar.emprestimo.pessoaId as any);
    } else {
      formData.append('pessoaId', emprestimo.pessoaId as any);
    }

    await this.emprestimoService
      .atualizar(this.atualizar.emprestimo.pessoaId!, this.atualizar.emprestimo.materialId!, formData)
      .subscribe();
    this.atualizar.limpar();
  }

  async removeEmprestimo(id: number) {
    if (confirm('Tenha cuidado ao remover e certeza do que está fazendo!')) {
      await this.emprestimoService.removerPorId(id).subscribe((x) => (this.testarRemoção(x)));
    } else {
      return;
    }
  }

  testarRemoção(emprestimo: Emprestimo) {
    if (emprestimo == null) {
      this.mensagem.adicionar('Não foi possível excluir emprestimo!');
    } else {
      this.mensagem.adicionar('Emprestimo excluído com sucesso!');
    }
  }

}
