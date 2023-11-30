import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dentista, Paciente, Usuario } from 'src/app/pages/auth/interfaces/usuario';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { PagoService } from '../services/pago.service';
import { Pago, PagoFactura } from '../interfaces/pago';
import { Factura } from '../../factura/interfaces/factura';
import { FacturaService } from '../../factura/services/factura.service';

@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.css']
})
export class CrearPagoComponent implements OnInit {

  pagoForm !: FormGroup;
  user!: Usuario | null;
  pagosFactura: PagoFactura[] = [];

  pagos: Pago[] = [];
  facturas: Factura[] = [];
  pacientes: Paciente[] = [];
  dentistas: Dentista[] = [];

  facturasFromUsuario !: Factura[];
  facturaSelected : Factura | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private pagoSvc: PagoService,
    private authSvc: AuthService,
    private facturaSvc:FacturaService) {
  }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    //this.loadPagos();

    this.pagoForm = this.formBuilder.group({
      selectedPatientId: [null, Validators.required],
      facturaSelected: [null, Validators.required],
      id_factura: [''],
      fecha: [''],
      monto: 0,
      forma_de_pago: ['contado'],
      observaciones: [''],
      //Factura
      fecha_emision: [{ value: '', disabled: true }],
      monto_total: [{ value: '', disabled: true }],
      saldo_deudor: [{ value: '', disabled: true }]

      
    })
    this.facturaSvc.getFacturasParms(this.user?.user.rol, this.user?.user.id)
    .subscribe(data => {
      this.facturas = data;
    });
  }

 /*  loadPagos(): void {
    this.pagoSvc.getPago(this.user?.user.id).subscribe(data => {
      this.pagosFactura = data
      this.separarDatos(this.pagosFactura)
    });
  }

  separarDatos(pagosFactura: PagoFactura[]) {
    pagosFactura.forEach((pagoFactura) => {
      const { id, id_factura, fecha, monto, forma_de_pago, observaciones, Factura } = pagoFactura;
      const { id_paciente, fecha_emision, monto_total, saldo_deudor, estado, id_dentista, Paciente, Dentista } = Factura;

      const pago: Pago = { id, id_factura, fecha, monto, forma_de_pago, observaciones };
      const factura: Factura = { id: id_factura, id_paciente, fecha_emision, monto_total, saldo_deudor, estado, id_dentista, Dentista, Paciente, id_tratamiento: 0, observaciones: "", monto_pago: 0, nota: "" };
      const paciente: Paciente = Paciente;
      const dentista: Dentista = Dentista;

      this.pagos.push(pago);
      this.facturas.push(factura);
      this.pacientes.push(paciente);
      this.dentistas.push(dentista);
    });
  } */

  onPatientSelectionChange(): void {
    const selectedPatientId = parseInt(this.pagoForm.value.selectedPatientId);
    this.obtenerFacturasPorIdPaciente(selectedPatientId);
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

  onFacturaSelectionChange(): void {
    const selectedFacturaID = parseInt(this.pagoForm.value.id_factura,10);
    this.facturaSelected = this.getFacturaById(selectedFacturaID)
    this.pagoForm.patchValue({
       fecha_emision: this.facturaSelected?.fecha_emision,
       monto_total: this.facturaSelected?.monto_total,
       saldo_deudor: this.facturaSelected?.saldo_deudor
     })
  }

  getFacturaById(facturaId: number): Factura | undefined {
    return this.facturasFromUsuario.find(factura => factura.id === facturaId);
  }

  obtenerFacturasPorIdPaciente(idPaciente: number):void {
    this.facturaSvc.getFacturasParms('paciente',idPaciente).subscribe(data =>{
      this.facturasFromUsuario = data
    })
  }

  onCreatePago():void{
    const data = this.pagoForm.value;
    console.log(data);
    
    this.pagoSvc.addPago(data).subscribe(res => {
      if (res) {
        console.log(res); 
      }
    })
  }
}
