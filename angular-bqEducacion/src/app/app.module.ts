import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ConductorComponent } from './pages/conductor/conductor.component';
import { AddCocheComponent } from './pages/add-coche/add-coche.component';
import { InfoComponent } from './pages/info/info.component';
import { InfoViajeComponent } from './pages/info-viaje/info-viaje.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    ClienteComponent,
    ConductorComponent,
    AddCocheComponent,
    InfoComponent,
    InfoViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
