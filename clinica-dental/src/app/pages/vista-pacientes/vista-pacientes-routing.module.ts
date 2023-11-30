import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPacientesComponent } from './vista-pacientes.component';
import { NuevaCitaComponent } from './nueva-cita/nueva-cita.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { PagosPorUsuarioLogueadoComponent } from './reportes/pagos-por-usuario-logueado/pagos-por-usuario-logueado.component';

const routes: Routes = [
  {
    path: '', component: VistaPacientesComponent,
    children: [
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
  {
    path: '', component: VistaPacientesComponent,
    children: [
      { path: 'pagosrealizados', component: PagosPorUsuarioLogueadoComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaPacientesRoutingModule { }
