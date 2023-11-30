import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdminComponent } from './vista-admin.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { 
    path: '', component: VistaAdminComponent,
    children: [
      {
        path: 'citas/calendario',
        component: CalendarioComponent // Reemplaza con el componente correcto
      },
       {
        path: 'citas/reporte',
        component: ReporteComponent // Reemplaza con el componente correcto
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
