import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LogInComponent } from './pages/auth/log-in/log-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { CitaComponent } from './pages/cita/cita.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { TratamientoComponent } from './pages/tratamiento/tratamiento.component';
import { PagoComponent } from './pages/pago/pago.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'citas', component: CitaComponent },
  { path: 'facturas', component: FacturaComponent },
  { path: 'tratamientos', component: TratamientoComponent },
  { path: 'pagos/:idFactura', component: PagoComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
