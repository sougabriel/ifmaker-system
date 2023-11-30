import { Component } from '@angular/core';
import { Acesso } from '../../interfaces/acesso';
import { AcessoService } from '../../services/routes/acesso.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.less']
})
export class AcessoComponent {

  acessoInForm!: FormGroup; 

  acessos: Acesso[] = [];
  colunasE: boolean = false;

  constructor (private acessoService: AcessoService, private atualizar: AtualizarService, private mensagem: MensagensService) {
    this.getAcessos();
  }

  ngOnInit(): void {
    this.acessoInForm = new FormGroup({
      id: new FormControl(),
      dia: new FormControl(),
      horaEntrada: new FormControl(),
      finalidade: new FormControl(),
      idPessoa: new FormControl(),
    });
  }

  get id() {
    return this.acessoInForm.get('id');
  }

  get dia() {
    return this.acessoInForm.get('dia')!;
  }

  get horaEntrada() {
    return this.acessoInForm.get('horaEntrada')!;
  }

  get finalidade() {
    return this.acessoInForm.get('finalidade')!;
  }

  get idPessoa() {
    return this.acessoInForm.get('idPessoa')!;
  }

  submit() {
    if (this.acessoInForm.invalid) {
      return;
    }
    this.adicionarAcesso(this.acessoInForm.value);
  }

  editarAcesso(acesso: Acesso) {
    this.atualizar.alterarAcesso(acesso);
  }

  recaregarTabela(): void {
    this.getAcessos();
  }

  getAcessos(): void {
    this.acessoService.consultarTodos().subscribe((acessos) => (this.acessos = acessos));
  }

  async adicionarAcesso(acesso: Acesso) {
    const formData = new FormData();

    formData.append('dia', acesso.dia as any);
    formData.append('horaEntrada', acesso.horaEntrada as any);
    formData.append('finalidade', acesso.finalidade!);
    formData.append('idPessoa', acesso.idPessoa as any);

    await this.acessoService.adicionar(formData).subscribe();
    this.recaregarTabela();
    this.mensagem.adicionar("Acesso adicionado com suscesso!");
  }

}
