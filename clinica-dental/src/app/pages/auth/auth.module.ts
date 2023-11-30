import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  exports:[
    SignUpComponent,
    LogInComponent
  ]
})
export class AuthModule { }
