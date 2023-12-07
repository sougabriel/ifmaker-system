import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Material } from 'src/app/sistema/interfaces/material';
import { Usuario } from 'src/app/sistema/interfaces/usuario';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { MaterialService } from 'src/app/sistema/services/routes/material.service';

@Component({
  selector: 'app-atualizar-material',
  templateUrl: './atualizar-material.component.html',
  styleUrls: ['./atualizar-material.component.less']
})
export class AtualizarMaterialComponent {

  materialForm!: FormGroup;
  usuarioLogado: Usuario = this.localStorage.get('usuario')[0];

  constructor(
    public atualizar: AtualizarService,
    private materialService: MaterialService,
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
    this.materialForm = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(),
      descricao: new FormControl(),
      tipo: new FormControl(),
      quantidade: new FormControl(),
    });
  }

  get id() {
    return this.materialForm.get('id');
  }

  get nome() {
    return this.materialForm.get('nome')!;
  }

  get descricao() {
    return this.materialForm.get('descricao')!;
  }

  get tipo() {
    return this.materialForm.get('tipo')!;
  }

  submit() {
    if (this.materialForm.invalid) {
      return;
    }
    this.atualizarMaterial(this.materialForm.value);
  }

  async atualizarMaterial(material: Material) {
    const formData = new FormData();

    
    if (material.nome == null) {
      formData.append('nome', this.atualizar.material.nome);
    } else {
      formData.append('nome', material.nome);
    }
    if (material.descricao == null) {
      formData.append('descricao', this.atualizar.material.descricao!);
    } else {
      formData.append('descricao', material.descricao!);
    }
    if (material.tipo == null) {
      formData.append('tipo', this.atualizar.material.tipo);
    } else {
      formData.append('tipo', material.tipo);
    }

    await this.materialService.atualizar(this.atualizar.material.id!, formData).subscribe();
    this.atualizar.limpar();
  }

  async removeMaterial(id: number) {
    if (confirm('Tenha cuidado ao remover e certeza do que está fazendo!')) {
      await this.materialService.removerPorId(id).subscribe((x) => (this.testarRemoção(x)));
    } else {
      return;
    }
  }

  testarRemoção(material: Material) {
    if (material == null) {
      this.mensagem.adicionar('Não foi possível excluir material!');
    } else {
      this.mensagem.adicionar('Material excluído com sucesso!');
    }
  }

}
