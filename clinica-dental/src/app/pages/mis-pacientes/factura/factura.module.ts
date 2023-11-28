import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FacturaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class FacturaModule { }
