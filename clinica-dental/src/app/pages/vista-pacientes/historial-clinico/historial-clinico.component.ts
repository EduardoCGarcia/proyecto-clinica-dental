import { Component } from '@angular/core';
import { HistorialClinicoService } from '../../mis-pacientes/historial-clinico/services/historial-clinico.service';
import { AuthService } from '../../auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { FacturaService } from '../../mis-pacientes/factura/services/factura.service';
import { Factura } from '../../mis-pacientes/factura/interfaces/factura';
import { Paciente, Usuario } from '../../auth/interfaces/usuario';
import { HistorialClinico } from '../../mis-pacientes/historial-clinico/interfaces/historial-clinico';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {
  historial: HistorialClinico[] = [];
  cols :any[] = [
    {field:'fecha', subfield:'', header:'Fecha de aplicación'},
    {field:'tratamiento', subfield:'nombre', header:'Tratamiento'},
    {field:'tratamiento', subfield:'descripcion', header:'Descripcion'},
    {field:'nota', subfield:'', header:'Nota'}
  ]
  user!: Usuario | null;
  selectedPatientId!: number;
  facturas: Factura[] = [];
  facturasRes: Factura[] = [];

  constructor(
    private historialService: HistorialClinicoService, 
    private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private userService: UsuariosService,
    private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    console.log("Id usuario actual "+this.user?.user.id);
    this.loadHistorial();
  }

  loadHistorial(): void {
      this.historialService.getHistorialesByPaciente(this.user?.user.id).subscribe(data => {
      this.historial = Array.isArray(data) ? data : [data];
      console.log(data);
      
    });
  }
}
