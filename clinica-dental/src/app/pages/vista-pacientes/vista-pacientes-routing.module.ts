import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPacientesComponent } from './vista-pacientes.component';
import { NuevaCitaComponent } from './nueva-cita/nueva-cita.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { CalendarioComponent } from '../calendario/calendario.component';

const routes: Routes = [
  {
    path: '', component: VistaPacientesComponent,
    children: [
      { path: 'citas/nueva', component: NuevaCitaComponent },
      { path: 'citas/calendario', component: CalendarioComponent },
    ]
  },
  {
    path: '', component: VistaPacientesComponent, 
    children: [
      { path: 'tratamientos', component: TratamientoComponent },
    ]
  },
  {
    path: '', component: VistaPacientesComponent,
    children: [
      { path: 'historialClinico', component: HistorialClinicoComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaPacientesRoutingModule { }
