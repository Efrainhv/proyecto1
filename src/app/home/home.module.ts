import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LogiComponent } from './logi/logi.component';
import { AccessComponent } from './access/access.component';
import { RecoverComponent } from './recover/recover.component';
import { PrincipalComponent } from './principal/principal.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { PonenciasComponent } from './ponencias/ponencias.component';
import { TalleresComponent } from './talleres/talleres.component';
import { TorneoComponent } from './torneo/torneo.component';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,LogiComponent,AccessComponent,RecoverComponent,PrincipalComponent,ConferenciasComponent,ContactosComponent,InstitucionesComponent,PonenciasComponent,TalleresComponent,TorneoComponent,CursosComponent]
})
export class HomePageModule {}
