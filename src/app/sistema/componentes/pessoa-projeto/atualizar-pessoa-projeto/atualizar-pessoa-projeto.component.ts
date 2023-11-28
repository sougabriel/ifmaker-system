import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PessoaProjeto } from 'src/app/sistema/interfaces/pessoa-projeto';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { PessoaProjetoService } from 'src/app/sistema/services/routes/pessoa-projeto.service';

@Component({
  selector: 'app-atualizar-pessoa-projeto',
  templateUrl: './atualizar-pessoa-projeto.component.html',
  styleUrls: ['./atualizar-pessoa-projeto.component.less']
})
export class AtualizarPessoaProjetoProjetoComponent {

  pessoaprojetoForm!: FormGroup;

  constructor(public atualizar: AtualizarService, private pessoaprojetoService: PessoaProjetoService) { }

  ngOnInit(): void {
    this.pessoaprojetoForm = new FormGroup({
      idPessoa: new FormControl(''),
      idProjeto: new FormControl(''),
    })
  }

  get idPessoa() {
    return this.pessoaprojetoForm.get('idPessoa');
  }

  get idProjeto() {
    return this.pessoaprojetoForm.get('idProjeto')!;
  }

  submit() {
    if (this.pessoaprojetoForm.invalid) {
      return;
    }
    this.atualizarPessoaProjeto(this.pessoaprojetoForm.value)
  }

  async atualizarPessoaProjeto(pessoaprojeto: PessoaProjeto) {
    const formData = new FormData;
    
    formData.append('idPessoa', pessoaprojeto.idPessoa as any);
    formData.append('idProjeto', pessoaprojeto.idProjeto as any); 

    await this.pessoaprojetoService.atualizar(this.atualizar.pessoaProjeto.idPessoa!, formData).subscribe();

  }

}
