import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaPacientesRoutingModule } from './vista-pacientes-routing.module';
import { VistaPacientesComponent } from './vista-pacientes.component';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { NuevaCitaComponent } from './nueva-cita/nueva-cita.component';


@NgModule({
  declarations: [
    VistaPacientesComponent,
    HistorialClinicoComponent,
    NuevaCitaComponent,
  ],
  imports: [
    CommonModule,
    VistaPacientesRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class VistaPacientesModule { }
