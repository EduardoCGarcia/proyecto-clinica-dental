import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisPacientesRoutingModule } from './mis-pacientes-routing.module';
import { MisPacientesComponent } from './mis-pacientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacturaModule } from './factura/factura.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    MisPacientesComponent
  ],
  imports: [
    CommonModule,
    MisPacientesRoutingModule,
    SharedModule,
    FacturaModule
  ]
})
export class MisPacientesModule { }
