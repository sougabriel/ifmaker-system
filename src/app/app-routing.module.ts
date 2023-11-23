import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DashboardComponent } from './sistema/dashboard/dashboard.component';
import { LogarComponent } from './forms/logar/logar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', title: 'Inicio', component: InicioComponent },
  { path: 'entrar', title: 'Entrar', component: LogarComponent },
  { path: 'sistema', title: 'Sistema', component: DashboardComponent },
  { path: '**', title: 'Página Não Encontrada', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
