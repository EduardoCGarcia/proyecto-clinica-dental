import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaAdminRoutingModule } from './vista-admin-routing.module';
import { VistaAdminComponent } from './vista-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReporteComponent } from './reporte/reporte.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    VistaAdminComponent,
    ReporteComponent
  ],
  imports: [
    CommonModule,
    VistaAdminRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class VistaAdminModule { }
