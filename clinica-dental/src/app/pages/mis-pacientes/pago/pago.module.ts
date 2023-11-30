import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoComponent } from './pago.component';
import { ListarPagosComponent } from './listar-pagos/listar-pagos.component';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  declarations: [
    PagoComponent,
    ListarPagosComponent,
    CrearPagoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagoModule { }
