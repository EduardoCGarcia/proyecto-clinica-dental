import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisPacientesRoutingModule } from './mis-pacientes-routing.module';
import { MisPacientesComponent } from './mis-pacientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacturaModule } from './factura/factura.module';
import { PagoModule } from './pago/pago.module';
import { HistorialClinicoModule } from './historial-clinico/historial-clinico.module';


@NgModule({
  declarations: [
    MisPacientesComponent
  ],
  imports: [
    CommonModule,
    MisPacientesRoutingModule,
    SharedModule,
    FacturaModule,
    PagoModule,
    HistorialClinicoModule
  ]
})
export class MisPacientesModule { }
