import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { NuevaFacturaComponent } from './nueva-factura/nueva-factura.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FacturaComponent,
    NuevaFacturaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NuevaFacturaComponent
  ]
})
export class FacturaModule { }
