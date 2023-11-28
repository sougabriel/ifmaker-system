import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Projeto } from 'src/app/sistema/interfaces/projeto';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { ProjetoService } from 'src/app/sistema/services/routes/projeto.service';

@Component({
  selector: 'app-atualizar-projeto',
  templateUrl: './atualizar-projeto.component.html',
  styleUrls: ['./atualizar-projeto.component.less']
})
export class AtualizarProjetoComponent {

  projetoForm!: FormGroup;

  constructor(public atualizar: AtualizarService, private projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.projetoForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(''),
      descricao: new FormControl(''),
    })
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
    this.atualizarProjeto(this.projetoForm.value)
  }

  async atualizarProjeto(projeto: Projeto) {
    const formData = new FormData;
    
    formData.append('idPessoa', projeto.nome);
    formData.append('idProjeto', projeto.descricao!); 

    await this.projetoService.atualizar(this.atualizar.projeto.id!, formData).subscribe();

  }

}
