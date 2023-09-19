import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogiComponent } from './home/logi/logi.component';
import { AccessComponent } from './home/access/access.component';
import { RecoverComponent } from './home/recover/recover.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { ConferenciasComponent } from './home/conferencias/conferencias.component';
import { ContactosComponent } from './home/contactos/contactos.component';
import { PonenciasComponent } from './home/ponencias/ponencias.component';
import { TalleresComponent } from './home/talleres/talleres.component';
import { TorneoComponent } from './home/torneo/torneo.component';
import { InstitucionesComponent } from './home/instituciones/instituciones.component';
import { CursosComponent } from './home/cursos/cursos.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'logi',
    component: LogiComponent,
  },
  {
    path: 'access',
    component: AccessComponent,
  },
  {
    path: 'recover',
    component: RecoverComponent,
  },
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'conferencias',
    component: ConferenciasComponent,
  },
  {
    path: 'contactos',
    component: ContactosComponent,
  },
  {
    path: 'ponencias',
    component: PonenciasComponent,
  },
  {
    path: 'talleres',
    component: TalleresComponent,
  },
  {
    path: 'torneo',
    component: TorneoComponent,
  },
  {
    path: 'instituciones',
    component: InstitucionesComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  },
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
