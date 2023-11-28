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
      tipo: new FormControl(),
      quantidade: new FormControl(),
      descricao: new FormControl(),
    });
  }

  get id() {
    return this.materialForm.get('id');
  }

  get nome() {
    return this.materialForm.get('nome')!;
  }

  get tipo() {
    return this.materialForm.get('tipo')!;
  }

  get quantidade() {
    return this.materialForm.get('quantidade')!;
  }

  get descricao() {
    return this.materialForm.get('descricao')!;
  }

  submit() {
    if (this.materialForm.invalid) {
      return;
    }
    this.atualizarMaterial(this.materialForm.value);
  }

  async atualizarMaterial(material: Material) {
    const formData = new FormData();

    
    if (material.nome == '') {
      formData.append('nome', this.atualizar.material.nome);
    } else {
      formData.append('nome', material.nome);
    }
    if (material.tipo == '') {
      formData.append('tipo', this.atualizar.material.tipo);
    } else {
      formData.append('tipo', material.tipo);
    }
    if (material.quantidade == null) {
      formData.append('quantidade', this.atualizar.material.quantidade as any);
    } else {
      formData.append('quantidade', material.quantidade as any);
    }
    if (material.descricao == null) {
      formData.append('finalidade', this.atualizar.material.descricao!);
    } else {
      formData.append('finalidade', material.descricao!);
    }

    await this.materialService.atualizar(this.atualizar.material.id!, formData).subscribe();
    this.atualizar.limpar();
  }

}
