import { Component } from '@angular/core';
import { Material } from '../../interfaces/material';
import { MaterialService } from '../../services/routes/material.service';
import { AtualizarService } from '../../services/atualizar.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less']
})
export class MaterialComponent {

  materiais: Material[] = [];
  colunasE: boolean = false;

  constructor (private materialService: MaterialService, private atualizar: AtualizarService) {
    this.getMateriais();    
  }

  getMateriais(): void {
    this.materialService.consultarTodos().subscribe((materiais) => (this.materiais = materiais));
  }

  recaregarTabela(): void {
    this.getMateriais();
  }

  editarMaterial(material: Material) {
    this.atualizar.alterarMaterial(material);
  }

}
