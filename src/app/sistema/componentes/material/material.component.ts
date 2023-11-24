import { Component } from '@angular/core';
import { Material } from '../../interfaces/material';
import { MaterialService } from '../../services/routes/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less']
})
export class MaterialComponent {

  materiais: Material[] = [];

  constructor (private materialService: MaterialService) {
    this.getMateriais();    
  }

  getMateriais(): void {
    this.materialService.consultarTodos().subscribe((materiais) => (this.materiais = materiais));
  }


  removeMaterial(id: number) {
    this.materiais = this.materiais.filter((a) => id !== a.id);
    this.materialService.removerPorId(id).subscribe();
  }

}
