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
      pessoaId: new FormControl(),
      projetoId: new FormControl(),
    })
  }

  get pessoaId() {
    return this.pessoaprojetoForm.get('pessoaId');
  }

  get projetoId() {
    return this.pessoaprojetoForm.get('projetoId')!;
  }

  submit() {
    if (this.pessoaprojetoForm.invalid) {
      return;
    }
    this.atualizarPessoaProjeto(this.pessoaprojetoForm.value)
  }

  async atualizarPessoaProjeto(pessoaprojeto: PessoaProjeto) {
    const formData = new FormData;
    
    if (pessoaprojeto.pessoaId == null) {
      formData.append('pessoaId', this.atualizar.pessoaProjeto.pessoaId as any);
    } else {
      formData.append('pessoaId', pessoaprojeto.pessoaId as any);
    }
    if (pessoaprojeto.projetoId == null) {
      formData.append('projetoId', this.atualizar.pessoaProjeto.projetoId as any); 
    } else {
      formData.append('projetoId', pessoaprojeto.projetoId as any); 
    }

    await this.pessoaprojetoService.atualizar(this.atualizar.pessoaProjeto.pessoaId!, formData).subscribe();
    this.atualizar.limpar();
  }

  async removePessoaProjeto(pessoaId: number) {
    await this.pessoaprojetoService.removerPorId(pessoaId).subscribe();
  }

}
