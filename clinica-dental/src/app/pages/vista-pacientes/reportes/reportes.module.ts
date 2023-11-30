import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosPorUsuarioLogueadoComponent } from './pagos-por-usuario-logueado/pagos-por-usuario-logueado.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    PagosPorUsuarioLogueadoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class ReportesModule { }
