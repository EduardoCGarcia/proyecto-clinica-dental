import { Component } from '@angular/core';
import { HistorialClinico } from 'src/app/pages/mis-pacientes/historial-clinico/interfaces/historial-clinico';
import { HistorialClinicoService } from 'src/app/pages/mis-pacientes/historial-clinico/services/historial-clinico.service';

@Component({
  selector: 'app-todos-los-historiales',
  templateUrl: './todos-los-historiales.component.html',
  styleUrls: ['./todos-los-historiales.component.css']
})
export class TodosLosHistorialesComponent {
  hostorial:HistorialClinico[] = []
  cols: any[] = [
    { field: 'Paciente', subfield: 'nombre', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]

  constructor(private hsvc:HistorialClinicoService){}

  ngOnInit(): void {
    this.hsvc.getHistoriales().subscribe((data) => {
      this.hostorial= data;
      console.log(data);
      
    })
  }
}
