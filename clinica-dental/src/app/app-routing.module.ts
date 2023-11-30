import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LogInComponent } from './pages/auth/log-in/log-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { CitaComponent } from './pages/cita/cita.component';
import { TratamientoComponent } from './pages/tratamiento/tratamiento.component';

import { HistorialClinicoComponent } from './pages/historial-clinico/historial-clinico.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'citas', component: CitaComponent },
  { path: 'tratamientos', component: TratamientoComponent },
  { path: 'historial-clinco/:idPaciente', component: HistorialClinicoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'mis-pacientes', loadChildren: () => import('./pages/mis-pacientes/mis-pacientes.module').then(m => m.MisPacientesModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
