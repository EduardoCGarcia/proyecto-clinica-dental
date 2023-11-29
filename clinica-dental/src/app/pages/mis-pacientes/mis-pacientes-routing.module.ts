import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisPacientesComponent } from './mis-pacientes.component';
import { FacturaComponent } from './factura/factura.component';
import { NuevaFacturaComponent } from './factura/nueva-factura/nueva-factura.component';

const routes: Routes = [
  {
    path: 'facturas', component: MisPacientesComponent, children: [
      { path: 'ver', component: FacturaComponent },
      { path: 'nueva', component: NuevaFacturaComponent }
    ]
  },
  { path: '', component: MisPacientesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisPacientesRoutingModule { }
