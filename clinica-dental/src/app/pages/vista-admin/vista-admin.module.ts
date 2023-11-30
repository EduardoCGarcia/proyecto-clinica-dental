import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaAdminRoutingModule } from './vista-admin-routing.module';
import { VistaAdminComponent } from './vista-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VistaAdminComponent
  ],
  imports: [
    CommonModule,
    VistaAdminRoutingModule,
    SharedModule
  ]
})
export class VistaAdminModule { }
