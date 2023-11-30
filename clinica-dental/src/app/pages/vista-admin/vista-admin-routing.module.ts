import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdminComponent } from './vista-admin.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { TotasLasCitasComponent } from './reportes/totas-las-citas/totas-las-citas.component';
import { PorMotivoComponent } from './reportes/por-motivo/por-motivo.component';
import { PorCitaRoleComponent } from './reportes/por-cita-role/por-cita-role.component';
import { TodasLasFacturasComponent } from './reportes/todas-las-facturas/todas-las-facturas.component';
import { TodosLosTratamientosComponent } from './reportes/todos-los-tratamientos/todos-los-tratamientos.component';
import { TratamientoComponent } from '../tratamiento/tratamiento.component';
import { TodosLosPagosComponent } from './reportes/todos-los-pagos/todos-los-pagos.component';

const routes: Routes = [
  { 
    path: '', component: VistaAdminComponent,
    children: [
      {
        path: 'citas/calendario',
        component: CalendarioComponent // Reemplaza con el componente correcto
      },
       {
        path: 'todascitas/reporte',
        component: TotasLasCitasComponent // Reemplaza con el componente correcto
      },
       {
        path: 'rol/urgencia',
        component: PorMotivoComponent // Reemplaza con el componente correcto
      },
       {
        path: 'rol/cita',
        component: PorCitaRoleComponent // Reemplaza con el componente correcto
      },
       {
        path: 'todasfacturas/reporte',
        component: TodasLasFacturasComponent // Reemplaza con el componente correcto
      },
       {
        path: 'todostratamientos/reporte',
        component: TodosLosTratamientosComponent // Reemplaza con el componente correcto
      },
       {
        path: 'cliente/vista',
        component: TratamientoComponent // Reemplaza con el componente correcto
      },
       {
        path: 'pagos/listar',
        component: TodosLosPagosComponent // Reemplaza con el componente correcto
      },
      /*{
        path: 'facturas/ver',
        component: ListarFacturasComponent // Reemplaza con el componente correcto
      },
      {
        path: 'facturas/lista',
        component: ListarTratamientosComponent // Reemplaza con el componente correcto
      },
      {
        path: 'pagos/listar',
        component: ListarPagosComponent // Reemplaza con el componente correcto
      },
      {
        path: 'historial/listar',
        component: ListarHistorialComponent // Reemplaza con el componente correcto
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaAdminRoutingModule { }
