import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Acesso } from 'src/app/sistema/interfaces/acesso';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { AcessoService } from 'src/app/sistema/services/routes/acesso.service';

@Component({
  selector: 'app-atualizar-acesso',
  templateUrl: './atualizar-acesso.component.html',
  styleUrls: ['./atualizar-acesso.component.less'],
})
export class AtualizarAcessoComponent {
  acessoForm!: FormGroup;

  constructor(
    public atualizar: AtualizarService,
    private acessoService: AcessoService
  ) {}

  ngOnInit(): void {
    this.acessoForm = new FormGroup({
      id: new FormControl(''),
      dia: new FormControl(''),
      horaEntrada: new FormControl(''),
      finalidade: new FormControl(),
      idPessoa: new FormControl(''),
    });
  }

  get id() {
    return this.acessoForm.get('id');
  }

  get dia() {
    return this.acessoForm.get('dia')!;
  }

  get horaEntrada() {
    return this.acessoForm.get('horaEntrada')!;
  }

  get finalidade() {
    return this.acessoForm.get('finalidade')!;
  }

  get idPessoa() {
    return this.acessoForm.get('idPessoa')!;
  }

  submit() {
    if (this.acessoForm.invalid) {
      return;
    }
    this.atualizarAcesso(this.acessoForm.value);
  }

  async atualizarAcesso(acesso: Acesso) {
    const formData = new FormData();

    formData.append('dia', acesso.dia as any);
    formData.append('horaEntrada', acesso.horaEntrada as any);
    formData.append('idPessoa', acesso.idPessoa as any);

    if (acesso.finalidade == null) {
      formData.append('finalidade', this.atualizar.acesso.finalidade!);
    } else {
      formData.append('finalidade', acesso.finalidade!);
    }

    await this.acessoService
      .atualizar(this.atualizar.acesso.id!, formData)
      .subscribe();
  }
}
