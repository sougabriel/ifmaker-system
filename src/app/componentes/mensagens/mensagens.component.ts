import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MensagensService } from 'src/app/services/mensagens.service';
 
@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.less']
})
export class MensagensComponent {
  faTimes = faTimes;

  constructor (public mensagemService: MensagensService) {

  }
  
}
