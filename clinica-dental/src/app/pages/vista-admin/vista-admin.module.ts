import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaAdminRoutingModule } from './vista-admin-routing.module';
import { VistaAdminComponent } from './vista-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReportesModule } from './reportes/reportes.module';


@NgModule({
  declarations: [
    VistaAdminComponent,
  ],
  imports: [
    CommonModule,
    VistaAdminRoutingModule,
    SharedModule,
    PrimeNgModule,
    ReportesModule
  ]
})
export class VistaAdminModule { }
