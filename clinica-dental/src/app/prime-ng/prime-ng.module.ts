import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule  } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { PanelModule } from "primeng/panel";
import { DividerModule } from 'primeng/divider';
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { MessagesModule } from 'primeng/messages';
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
    MessagesModule
  ]
})
export class PrimeNgModule { }
