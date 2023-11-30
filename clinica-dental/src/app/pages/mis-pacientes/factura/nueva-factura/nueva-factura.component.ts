import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Factura, FacturaCreate } from '../interfaces/factura';
import { FacturaService } from '../services/factura.service';
import { Paciente, Usuario } from 'src/app/pages/auth/interfaces/usuario';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { TratamientoService } from 'src/app/pages/tratamiento/service/tratamiento.service';
import { Tratamiento } from 'src/app/pages/tratamiento/interfaces/tratamiento';

@Component({
  selector: 'app-nueva-factura',
  templateUrl: './nueva-factura.component.html',
  styleUrls: ['./nueva-factura.component.css']
})
export class NuevaFacturaComponent implements OnInit {
  factura: Factura = {
    id: 0,
    id_paciente: 0,
    fecha_emision: new Date(),
    monto_total: 0,
    observaciones: "",
    saldo_deudor: 0,
    estado: false,
    id_dentista: 0,
    id_tratamiento: 0,
    monto_pago: 0,
    nota: "",
    Dentista: {
      id: 0,
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      telefono: "",
      email: "",
      notas: "",
      cedula: ""
    },
    Paciente: {
      id: 0,
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      telefono: "",
      email: "",
      notas: "",
      imagen: ""
    }
  }


  facturaForm !: FormGroup;
  user!: Usuario | null;
  facturas: Factura[] = [];
  tratamientos: Tratamiento[] = [];

  pacienteSeleccionado: Paciente | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private facturaSvc: FacturaService,
    private authSvc: AuthService,
    private tratamientoSvc: TratamientoService) {
  }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })

    this.facturaSvc.getFacturasParms(this.user?.user.rol, this.user?.user.id)
      .subscribe(data => {
        this.facturas = data;
      });

    this.tratamientoSvc.getTratamientos()
      .subscribe(data => {
        this.tratamientos = data
      })

    this.facturaForm = this.formBuilder.group({
      selectedPatient: [null, Validators.required],
      email: [''],
      telefono: [''],
      id_paciente: this.factura.id_paciente,
      fecha_emision: this.factura.fecha_emision,
      id_tratamiento: [null, Validators.required],
      total_tratamiento: this.factura.monto_total,
      observaciones: this.factura.observaciones,
      monto: this.factura.monto_pago,
      estado: ['false'],
      nota: this.factura.nota,
      id_dentista: this.user?.user.id
    })
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

  getUniqueTratamientos(): Tratamiento[] {
    const uniqueTratamientos: Tratamiento[] = [];

    // Iterar sobre facturas y agregar pacientes únicos a uniquePatients
    this.tratamientos.forEach(trat => {
      const existingTratamiento = uniqueTratamientos.find(tratamiento => tratamiento.id === trat.id);

      if (!existingTratamiento) {
        uniqueTratamientos.push(trat);
      }
    });

    return uniqueTratamientos;
  }


  onPatientSelectionChange(): void {
    const selectedPatientId = this.facturaForm.value.selectedPatient;


    if (selectedPatientId) {
      this.pacienteSeleccionado = this.getPatientById(parseInt(selectedPatientId, 10));
      this.facturaForm.patchValue({
        email: this.pacienteSeleccionado?.email || '',
        telefono: this.pacienteSeleccionado?.telefono || '',
        id_paciente: parseInt(selectedPatientId, 10)
      });
    }
  }
  onTratamientosSelectionChange(): void {
    const selectedTratamientoId = this.facturaForm.value.id_tratamiento;
    this.factura = { ...this.factura, id_tratamiento: parseInt(selectedTratamientoId, 10) }
    console.log(this.factura);

  }
  getPatientById(patientId: number): Paciente | undefined {
    return this.getUniquePatients().find(patient => patient.id === patientId);
  }

  onCreateFactura() {
    const data = this.facturaForm.value
    console.log(data);

    this.facturaSvc.createFactura(data).subscribe(res => {
      if (res) {
        console.log(res);
      }
    })


  }
}
