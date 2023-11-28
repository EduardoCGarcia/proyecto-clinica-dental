import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CalendarioComponent } from "./calendario.component";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
    declarations: [
      CalendarioComponent
    ],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      FullCalendarModule
    ],
    exports:[
      CalendarioComponent
    ]
  })
  export class CalendarioModule { }