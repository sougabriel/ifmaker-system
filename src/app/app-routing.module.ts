import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EntrarComponent } from './forms/entrar/entrar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', title: 'Inicio', component: InicioComponent },
  { path: 'sobre', title: 'Sobre', component: SobreComponent },
  { path: 'entrar', title: 'Entrar', component: EntrarComponent },
  { path: '**', title: 'Página Não Encontrada', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
