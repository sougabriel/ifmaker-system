import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/sistema/interfaces/pessoa';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { PessoaService } from 'src/app/sistema/services/routes/pessoa.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.less']
})
export class AtualizarPessoaComponent {

  pessoaForm!: FormGroup;

  constructor(public atualizar: AtualizarService, private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(),
      email: new FormControl(),
      telefone: new FormControl(),
      publico: new FormControl(),
    })
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
    this.atualizarPessoa(this.pessoaForm.value)
  }

  async atualizarPessoa(pessoa: Pessoa) {
    const formData = new FormData;
    
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

    await this.pessoaService.atualizar(this.atualizar.pessoa.id!, formData).subscribe();

    this.atualizar.limpar();

  }

  async removePessoa(id: number) {
    await this.pessoaService.removerPorId(id).subscribe();
  }

}
