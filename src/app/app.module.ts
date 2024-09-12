import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SplashPageComponent } from './area-cad-log/splash-page/splash-page.component';
import { CadastroComponent } from './area-cad-log/cadastro/cadastro.component';
import { LoginComponent } from './area-cad-log/login/login.component';
import { UsoAppComponent } from './area-cad-log/uso-app/uso-app.component';
import { CriarFamComponent } from './area-cad-log/criar-fam/criar-fam.component';
import { EntrarFamComponent } from './area-cad-log/entrar-fam/entrar-fam.component';
import { PersonalizarPerfilComponent } from './area-cad-log/personalizar-perfil/personalizar-perfil.component';
import { PersonalizarPerfilDivergenteComponent } from './area-cad-log/personalizar-perfil-divergente/personalizar-perfil-divergente.component';
import { AcessibilidadeComponent } from './area-cad-log/acessibilidade/acessibilidade.component';
import { HomeAtipicoComponent } from './atipico/home-atipico/home-atipico.component';
import { ConfigCriseComponent } from './atipico/config-crise/config-crise.component';
import { HomeTipicoComponent } from './tipico/home-tipico/home-tipico.component';
import { MoodTrackerComponent } from './tipico/mood/mood-tracker/mood-tracker.component';
import { FormsMoodComponent } from './tipico/mood/forms-mood/forms-mood.component';
import { CalendarioToDoComponent } from './tipico/organizacao/calendario-to-do/calendario-to-do.component';
import { AddCalendarioComponent } from './tipico/organizacao/add-calendario/add-calendario.component';
import { AddToDoComponent } from './tipico/organizacao/add-to-do/add-to-do.component';
import { PerfilComponent } from './tipico/personalizacao/perfil/perfil.component';
import { ConfigPerfilComponent } from './tipico/personalizacao/config-perfil/config-perfil.component';
import { MedEditarComponent } from './tipico/personalizacao/med-editar/med-editar.component';
import { MedFichaComponent } from './tipico/personalizacao/med-ficha/med-ficha.component';
import { NavbarComponent } from './components-gerais/navbar/navbar.component';
import { BotaoDeCriseComponent } from './components-gerais/botao-de-crise/botao-de-crise.component';
import { BannerComponent } from './components-gerais/banner/banner.component';
import { ToDoComponent } from './components-gerais/to-do/to-do.component';
import { CalendarioComponent } from './components-gerais/calendario/calendario.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { EmotionComponent } from './components-gerais/emotion/emotion.component';



@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    CadastroComponent,
    LoginComponent,
    UsoAppComponent,
    CriarFamComponent,
    EntrarFamComponent,
    PersonalizarPerfilComponent,
    PersonalizarPerfilDivergenteComponent,
    AcessibilidadeComponent,
    HomeAtipicoComponent,
    ConfigCriseComponent,
    HomeTipicoComponent,
    MoodTrackerComponent,
    FormsMoodComponent,
    CalendarioToDoComponent,
    AddCalendarioComponent,
    AddToDoComponent,
    PerfilComponent,
    ConfigPerfilComponent,
    MedEditarComponent,
    MedFichaComponent,
    NavbarComponent,
    BotaoDeCriseComponent,
    BannerComponent,
    ToDoComponent,
    CalendarioComponent,
    EmotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
