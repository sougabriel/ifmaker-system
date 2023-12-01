import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Emprestimo } from 'src/app/sistema/interfaces/emprestimo';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { EmprestimoService } from 'src/app/sistema/services/routes/emprestimo.service';

@Component({
  selector: 'app-atualizar-emprestimo',
  templateUrl: './atualizar-emprestimo.component.html',
  styleUrls: ['./atualizar-emprestimo.component.less'],
})
export class AtualizarEmprestimoComponent {
  emprestimoForm!: FormGroup;

  constructor(
    public atualizar: AtualizarService,
    private emprestimoService: EmprestimoService
  ) {}

  ngOnInit(): void {
    this.emprestimoForm = new FormGroup({
      dataInicial: new FormControl(),
      dataFinal: new FormControl(),
      finalidade: new FormControl(),
      materialId: new FormControl(),
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
    await this.emprestimoService.removerPorId(id).subscribe();
  }


}
