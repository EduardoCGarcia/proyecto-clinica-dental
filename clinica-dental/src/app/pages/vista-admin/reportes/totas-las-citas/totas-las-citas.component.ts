import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/pages/cita/interfaces/cita';
import { CitaService } from 'src/app/pages/cita/services/cita.service';

@Component({
  selector: 'app-totas-las-citas',
  templateUrl: './totas-las-citas.component.html',
  styleUrls: ['./totas-las-citas.component.css']
})
export class TotasLasCitasComponent implements OnInit{
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
    this.citasSVC.getAppointments().subscribe((data) => {
      this.citas= data;
    })
  }
}
