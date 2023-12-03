import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Material } from 'src/app/sistema/interfaces/material';
import { AtualizarService } from 'src/app/sistema/services/atualizar.service';
import { MaterialService } from 'src/app/sistema/services/routes/material.service';

@Component({
  selector: 'app-atualizar-material',
  templateUrl: './atualizar-material.component.html',
  styleUrls: ['./atualizar-material.component.less']
})
export class AtualizarMaterialComponent {

  materialForm!: FormGroup;

  constructor(
    public atualizar: AtualizarService,
    private materialService: MaterialService
  ) {}

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

  get quantidade() {
    return this.materialForm.get('quantidade')!;
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
    if (material.quantidade == null) {
      formData.append('quantidade', this.atualizar.material.quantidade as any);
    } else {
      formData.append('quantidade', material.quantidade as any);
    }

    await this.materialService.atualizar(this.atualizar.material.id!, formData).subscribe();
    this.atualizar.limpar();
  }

  async removeMaterial(id: number) {
    await this.materialService.removerPorId(id).subscribe();
  }

}
