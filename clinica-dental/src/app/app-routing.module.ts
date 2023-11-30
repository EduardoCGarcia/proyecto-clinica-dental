import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LogInComponent } from './pages/auth/log-in/log-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { CitaComponent } from './pages/cita/cita.component';
import { TratamientoComponent } from './pages/tratamiento/tratamiento.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LogInComponent },
  {path: 'calendario', component:CalendarioComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'citas', component: CitaComponent },
  { path: 'tratamientos', component: TratamientoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'mis-pacientes', loadChildren: () => import('./pages/mis-pacientes/mis-pacientes.module').then(m => m.MisPacientesModule) },
  { path: 'pacientesView', loadChildren: () => import('./pages/vista-pacientes/vista-pacientes.module').then(m => m.VistaPacientesModule) },
  { path: 'adminView', loadChildren: () => import('./pages/vista-admin/vista-admin.module').then(m => m.VistaAdminModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
