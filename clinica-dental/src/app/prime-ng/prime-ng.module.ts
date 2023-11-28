import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { PanelModule } from "primeng/panel";
import { DividerModule } from 'primeng/divider';
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from "primeng/accordion";
import { CarouselModule } from "primeng/carousel";
import { GalleriaModule } from "primeng/galleria";
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SplitterModule } from 'primeng/splitter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    PanelModule,
    DividerModule,
    DialogModule,
    TableModule,
    MessagesModule,
    AccordionModule,
    CarouselModule,
    GalleriaModule,
    AvatarModule,
    AvatarGroupModule,
    SplitterModule,
    InputTextareaModule,
    CalendarModule
  ]
})
export class PrimeNgModule { }
