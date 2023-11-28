import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisPacientesComponent } from './mis-pacientes.component';
import { FacturaComponent } from './factura/factura.component';

const routes: Routes = [
  {
    path: 'verfacturas', component: MisPacientesComponent, children: [
      { path: '', component: FacturaComponent },
      { path: 'factura', component: FacturaComponent }
    ]
  },
  { path: '', component: MisPacientesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisPacientesRoutingModule { }
