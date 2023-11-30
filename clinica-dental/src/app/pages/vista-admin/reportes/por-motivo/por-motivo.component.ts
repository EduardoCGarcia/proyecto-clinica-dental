import { Component } from '@angular/core';
import { Cita } from 'src/app/pages/cita/interfaces/cita';
import { CitaService } from 'src/app/pages/cita/services/cita.service';

@Component({
  selector: 'app-por-motivo',
  templateUrl: './por-motivo.component.html',
  styleUrls: ['./por-motivo.component.css']
})
export class PorMotivoComponent {
  citas:Cita[] = []
  cols: any[] = [
    { field: 'Paciente', subfield: 'nombre', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]

  constructor(private citasSVC:CitaService){}

  ngOnInit(): void {
    this.citasSVC.getAppointmentsByRol('urgencia').subscribe((data) => {
      this.citas= data;
    })
  }
}
