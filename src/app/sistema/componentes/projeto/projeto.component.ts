import { Component } from '@angular/core';
import { Projeto } from '../../interfaces/projeto';
import { ProjetoService } from '../../services/routes/projeto.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.less']
})
export class ProjetoComponent {

  projetoInForm!: FormGroup;
  projetos: Projeto[] = [];
  colunasE: boolean = false;

  constructor(private projetoService: ProjetoService, private atualizar: AtualizarService) {
    this.getProjetos();
  }

  ngOnInit(): void {
    this.projetoInForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      descricao: new FormControl(null, Validators.required),
    });
  }

  submit():void {
    if (this.projetoInForm.invalid) {
      return;
    }
    this.adicionarProjeto(this.projetoInForm.value);
    this.projetoInForm.reset();
  }

  async adicionarProjeto(projeto: Projeto) {
    const formData = new FormData();

    formData.append('nome', projeto.nome);
    
    if (projeto.descricao == null) {
      formData.append('descricao', '');
    } else {
      formData.append('descricao', projeto.descricao!);
    }

    this.projetoService.adicionar(formData).subscribe();
    this.recaregarTabela();
  }

  recaregarTabela(): void {
    this.getProjetos();
  }

  getProjetos(): void {
    this.projetoService.consultarTodos().subscribe((projetos) => (this.projetos = projetos));
  }

  editarProjeto(projeto: Projeto) {
    this.atualizar.alterarProjeto(projeto);
  }

}
