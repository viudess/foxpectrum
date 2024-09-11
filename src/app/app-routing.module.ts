import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoodTrackerComponent } from './tipico/mood/mood-tracker/mood-tracker.component';
import { CalendarioToDoComponent } from './tipico/organizacao/calendario-to-do/calendario-to-do.component';
import { PerfilComponent } from './tipico/personalizacao/perfil/perfil.component';
import { HomeTipicoComponent } from './tipico/home-tipico/home-tipico.component';

const routes: Routes = [
  { path: '', component: HomeTipicoComponent },
  { path: 'mood', component: MoodTrackerComponent },
  { path: 'organizacao', component: CalendarioToDoComponent },
  { path: 'personalizacao', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
