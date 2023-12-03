import { Component } from '@angular/core';
import { Material } from '../../interfaces/material';
import { MaterialService } from '../../services/routes/material.service';
import { AtualizarService } from '../../services/atualizar.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less']
})
export class MaterialComponent {

  materialInForm!: FormGroup;
  materiais: Material[] = [];
  colunasE: boolean = false;

  nomeBuscar: string = '';
  tipoBuscar: string = '';

  constructor (private materialService: MaterialService, private atualizar: AtualizarService) {
    this.getMateriais();    
  }

  ngOnInit(): void {
    this.materialInForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      descricao: new FormControl(),
      tipo: new FormControl(null, Validators.required),
      quantidade: new FormControl(null, Validators.required),
    });
  }

  get nome() {
    return this.materialInForm.get('nome')!;
  }

  get descricao() {
    return this.materialInForm.get('descricao')!;
  }

  get tipo() {
    return this.materialInForm.get('tipo')!;
  }

  get quantidade() {
    return this.materialInForm.get('quantidade')!;
  }

  submit(): void {
    if (this.materialInForm.invalid) {
      return;
    }
    this.adicionarMaterial(this.materialInForm.value);
    this.materialInForm.reset();
  }

  async adicionarMaterial(material: Material) {
    const formData = new FormData();

    formData.append('nome', material.nome);
    if (material.descricao == null) {
      formData.append('descricao', '');
    } else {
      formData.append('descricao', material.descricao!);
    }
    formData.append('tipo', material.tipo);
    formData.append('quantidade', material.quantidade as any);

    await this.materialService.adicionar(formData).subscribe();
    this.recaregarTabela();
    
  }

  getMateriais(): void {
    this.materialService.consultarTodos().subscribe((materiais) => (this.materiais = materiais));
  }

  getMaterialPorNome(nome: string): void {
    this.materialService.consultarPorNome(nome).subscribe((materiais) => (this.materiais = materiais));
  }

  getMaterialPorTipo(tipo: string): void {
    this.materialService.consultarPorTipo(tipo).subscribe((materiais) => (this.materiais = materiais));
  }

  recaregarTabela(): void {
    this.getMateriais();
  }

  editarMaterial(material: Material) {
    this.atualizar.alterarMaterial(material);
  }

}
