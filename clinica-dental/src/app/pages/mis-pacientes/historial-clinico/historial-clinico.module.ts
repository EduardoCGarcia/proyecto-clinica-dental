import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialClinicoComponent } from './historial-clinico.component';
import { PorPacientesComponent } from './por-pacientes/por-pacientes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HistorialClinicoComponent,
    PorPacientesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class HistorialClinicoModule { }
