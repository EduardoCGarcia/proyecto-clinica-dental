import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaComponent } from './cita.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { CitaService } from './services/cita.service';



@NgModule({
  declarations: [
    CitaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    CitaComponent
  ]
})
export class CitaModule { }
