import { Component } from '@angular/core';
import { Pago, PagoFactura } from 'src/app/pages/mis-pacientes/pago/interfaces/pago';
import { PagoService } from 'src/app/pages/mis-pacientes/pago/services/pago.service';

@Component({
  selector: 'app-todos-los-pagos',
  templateUrl: './todos-los-pagos.component.html',
  styleUrls: ['./todos-los-pagos.component.css']
})
export class TodosLosPagosComponent {
  pagos:PagoFactura[] = []
  cols: any[] = [
    { field: 'Paciente', subfield: 'nombre', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]

  constructor(private pagoSVC:PagoService){}

  ngOnInit(): void {
    this.pagoSVC.getAllPago().subscribe((data) => {
      this.pagos= data;
    })
  }
}
