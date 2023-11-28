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
      id: new FormControl(),
      dataInicial: new FormControl(),
      dataFinal: new FormControl(),
      finalidade: new FormControl(),
      idMaterial: new FormControl(),
      idPessoa: new FormControl(),
    });
  }

  get id() {
    return this.emprestimoForm.get('id');
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

  get idMaterial() {
    return this.emprestimoForm.get('idMaterial')!;
  }

  get idPessoa() {
    return this.emprestimoForm.get('idPessoa')!;
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
    if (emprestimo.idMaterial == null) {
      formData.append('idMaterial', this.atualizar.emprestimo.idMaterial as any);
    } else {
      formData.append('idMaterial', emprestimo.idMaterial as any);
    }
    if (emprestimo.idPessoa == null) {
      formData.append('idPessoa', this.atualizar.emprestimo.idPessoa as any);
    } else {
      formData.append('idPessoa', emprestimo.idPessoa as any);
    }

    await this.emprestimoService
      .atualizar(this.atualizar.emprestimo.id!, formData)
      .subscribe();
    this.atualizar.limpar();
  }

}
