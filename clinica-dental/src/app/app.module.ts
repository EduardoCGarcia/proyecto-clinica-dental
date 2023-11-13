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
import { FacturaModule } from './pages/factura/factura.module';
import { TratamientoModule } from './pages/tratamiento/tratamiento.module';
import { PagoModule } from './pages/pago/pago.module';
import { HistorialClinicoModule } from './pages/historial-clinico/historial-clinico.module';

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
    FacturaModule,
    TratamientoModule,
    PagoModule,
    HistorialClinicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
