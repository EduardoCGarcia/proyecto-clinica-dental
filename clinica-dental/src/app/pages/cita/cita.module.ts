import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaComponent } from './cita.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';
import { TableComponent } from 'src/app/shared/table/table.component';



@NgModule({
  declarations: [
    CitaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule
  ],
  exports:[
    CitaComponent
  ]
})
export class CitaModule { }
