import { Component } from '@angular/core';
import { Cita } from 'src/app/pages/cita/interfaces/cita';
import { CitaService } from 'src/app/pages/cita/services/cita.service';

@Component({
  selector: 'app-por-cita-role',
  templateUrl: './por-cita-role.component.html',
  styleUrls: ['./por-cita-role.component.css']
})
export class PorCitaRoleComponent {
  citas: Cita[] = []
  cols: any[] = [
    { field: 'Paciente', subfield: 'nombre', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]

  constructor(private citasSVC: CitaService) { }

  ngOnInit(): void {
    this.citasSVC.getAppointmentsByRol('cita').subscribe((data) => {
      this.citas = data;
    })
  }
}
