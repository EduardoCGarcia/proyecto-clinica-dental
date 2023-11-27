import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TratamientoComponent } from './tratamiento.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    TratamientoComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    CarouselComponent
  ]
})
export class TratamientoModule { }
