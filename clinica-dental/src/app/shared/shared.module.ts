import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";;
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MenuBarComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuBarComponent,
  ]
})
export class SharedModule { }
