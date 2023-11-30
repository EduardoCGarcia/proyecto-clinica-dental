import { Component } from '@angular/core';
import { HistorialClinico } from '../interfaces/historial-clinico';
import { HistorialClinicoService } from '../services/historial-clinico.service';
import { Paciente, Usuario } from 'src/app/pages/auth/interfaces/usuario';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { FacturaService } from '../../factura/services/factura.service';
import { Factura } from '../../factura/interfaces/factura';

@Component({
  selector: 'app-por-pacientes',
  templateUrl: './por-pacientes.component.html',
  styleUrls: ['./por-pacientes.component.css']
})
export class PorPacientesComponent {
  historial: HistorialClinico[] = [];
  cols :any[] = [
    {field:'fecha', subfield:'', header:'Fecha de aplicación'},
    {field:'tratamiento', subfield:'nombre', header:'Tratamiento'},
    {field:'tratamiento', subfield:'descripcion', header:'Descripcion'},
    {field:'nota', subfield:'', header:'Nota'}
  ]
  user!: Usuario | null;
  historialClinicoForm!:FormGroup;
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

    this.facturaService.getFacturasParms(this.user?.user.rol,this.user?.user.id)
    .subscribe(data=>{
      this.facturas = data;
    })


    this.historialClinicoForm= this.formBuilder
    .group({
      selectedPatient: [null,Validators.required]
    });
    

 /*    this.historialClinicoForm = this.formBuilder
    .group({
      selectedPatient: [null, Validators.required]
    })
    this.loadHistorial(); */
  }

  obtenerFacturasPorIdPaciente(id_paciente: number){
    return this.facturas.filter((factura)=>factura.id_paciente === id_paciente)
  }

  getUniquePatients(): Paciente[] {
    const uniquePatients: Paciente[] = [];

    // Iterar sobre facturas y agregar pacientes únicos a uniquePatients
    this.facturas.forEach(factura => {
      const existingPatient = uniquePatients.find(patient => patient.id === factura.Paciente.id);

      if (!existingPatient) {
        uniquePatients.push(factura.Paciente);
      }
    });

    return uniquePatients;
  }

  loadHistorial(): void {
      this.historialService.getHistorialesByPaciente(this.selectedPatientId).subscribe(data => {
      this.historial = Array.isArray(data) ? data : [data];
      console.log(data);
      
    });
  }

  onPatientSelectionChange(): void {
    this.selectedPatientId = parseInt(this.historialClinicoForm.value.selectedPatient, 10);
    this.facturasRes = this.obtenerFacturasPorIdPaciente(this.selectedPatientId);
    this.historialService.getHistorialesByPaciente(this.selectedPatientId)
    .subscribe((res)=>{this.historial = res;
    })
    
    
  }


/*
  getUniquePatients(): Paciente[] {
    const uniquePatients: Paciente[] = [];

    // Iterar sobre facturas y agregar pacientes únicos a uniquePatients
    this.facturas.forEach(factura => {
      const existingPatient = uniquePatients.find(patient => patient.id === factura.Paciente.id);

      if (!existingPatient) {
        uniquePatients.push(factura.Paciente);
      }
    });

    return uniquePatients;
  }
*/
}
