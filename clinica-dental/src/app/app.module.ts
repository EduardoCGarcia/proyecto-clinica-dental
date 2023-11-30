import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './pages/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CitaModule } from './pages/cita/cita.module';
import { TratamientoModule } from './pages/tratamiento/tratamiento.module';
import { CalendarioModule } from './pages/calendario/calendario.module';
import { HistorialClinicoModule } from './pages/mis-pacientes/historial-clinico/historial-clinico.module';
import { VistaAdminModule } from './pages/vista-admin/vista-admin.module';
import { VistaPacientesModule } from './pages/vista-pacientes/vista-pacientes.module';
import { CalendarioComponent } from './pages/calendario/calendario.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    PrimeNgModule,
    FormsModule,
    AuthModule,
    CitaModule,
    TratamientoModule,
    HistorialClinicoModule,
    CalendarioModule,
    VistaAdminModule,
    VistaPacientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
