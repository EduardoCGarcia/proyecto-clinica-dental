import { Component } from '@angular/core';
import { Usuario } from 'src/app/pages/auth/interfaces/usuario';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { PagoFactura } from 'src/app/pages/mis-pacientes/pago/interfaces/pago';
import { PagoService } from 'src/app/pages/mis-pacientes/pago/services/pago.service';

@Component({
  selector: 'app-pagos-por-usuario-logueado',
  templateUrl: './pagos-por-usuario-logueado.component.html',
  styleUrls: ['./pagos-por-usuario-logueado.component.css']
})
export class PagosPorUsuarioLogueadoComponent {
  pagos: PagoFactura[] = []

  user!: Usuario | null;

  constructor(private pagoSVC: PagoService, private authSvc:AuthService) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    
    this.pagoSVC.getPagosByPaciente(this.user?.user.id).subscribe((data) => {
      this.pagos = data;
    })
  }
}
