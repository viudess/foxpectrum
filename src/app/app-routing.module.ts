import { FormsMoodComponent } from './tipico/mood/forms-mood/forms-mood.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoodTrackerComponent } from './tipico/mood/mood-tracker/mood-tracker.component';
import { CalendarioToDoComponent } from './tipico/organizacao/calendario-to-do/calendario-to-do.component';
import { PerfilComponent } from './tipico/personalizacao/perfil/perfil.component';
import { HomeTipicoComponent } from './tipico/home-tipico/home-tipico.component';
import { AddToDoComponent } from './tipico/organizacao/add-to-do/add-to-do.component';
import { AddCalendarioComponent } from './tipico/organizacao/add-calendario/add-calendario.component';
import { ConfigPerfilComponent } from './tipico/personalizacao/config-perfil/config-perfil.component';
import { CadastroComponent } from './area-cad-log/cadastro/cadastro.component';
import { MedFichaComponent } from './tipico/personalizacao/med-ficha/med-ficha.component';
import { MedEditarComponent } from './tipico/personalizacao/med-editar/med-editar.component';

const routes: Routes = [
  { path: '', component: HomeTipicoComponent },

  { path: 'mood', component: MoodTrackerComponent },
  { path: 'formsmood', component: FormsMoodComponent },

  { path: 'organizacao', component: CalendarioToDoComponent },
  { path: 'addtodo', component: AddToDoComponent },
  { path: 'addcalendario', component: AddCalendarioComponent },

  { path: 'perfil', component: PerfilComponent },
  { path: 'configperfil', component: ConfigPerfilComponent },
  { path: 'medficha', component: MedFichaComponent },
  { path: 'mededitar', component: MedEditarComponent },

  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
