import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CitaComponent } from './cita.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { SharedModule } from '../../shared/shared.module';
import { CalendarioModule } from '../calendario/calendario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CitaComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule,
    CalendarioModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  exports:[
    CitaComponent
  ]
})
export class CitaModule { }
