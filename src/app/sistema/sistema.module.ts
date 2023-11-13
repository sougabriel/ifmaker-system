import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaRoutingModule } from './sistema-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosService } from './services/routes/usuarios.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    HttpClientModule
  ], 
  exports: [
    DashboardComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class SistemaModule { }
