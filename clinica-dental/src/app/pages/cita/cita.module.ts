import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaComponent } from './cita.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';
import { CalendarioModule } from '../calendario/calendario.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CitaComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule,
    CalendarioModule,
    FormsModule
  ],
  exports:[
    CitaComponent
  ]
})
export class CitaModule { }
