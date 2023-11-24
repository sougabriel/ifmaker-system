import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  list: string[];

  constructor(private router: Router) {
    this.list = ["material", "pessoa", "projeto", "pessoa-projeto", "acesso", "usuario", "registro"];
  }


}
