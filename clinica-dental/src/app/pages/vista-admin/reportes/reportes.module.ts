import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotasLasCitasComponent } from './totas-las-citas/totas-las-citas.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PorMotivoComponent } from './por-motivo/por-motivo.component';
import { PorCitaRoleComponent } from './por-cita-role/por-cita-role.component';
import { TodasLasFacturasComponent } from './todas-las-facturas/todas-las-facturas.component';
import { TodosLosTratamientosComponent } from './todos-los-tratamientos/todos-los-tratamientos.component';
import { TodosLosPagosComponent } from './todos-los-pagos/todos-los-pagos.component';
import { TodosLosHistorialesComponent } from './todos-los-historiales/todos-los-historiales.component';



@NgModule({
  declarations: [
    TotasLasCitasComponent,
    PorMotivoComponent,
    PorCitaRoleComponent,
    TodasLasFacturasComponent,
    TodosLosTratamientosComponent,
    TodosLosPagosComponent,
    TodosLosHistorialesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ],
  exports:[
    TotasLasCitasComponent,
    
  ]
})
export class ReportesModule { }
