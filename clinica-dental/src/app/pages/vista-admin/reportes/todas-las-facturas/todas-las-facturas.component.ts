import { Component } from '@angular/core';
import { Factura } from 'src/app/pages/mis-pacientes/factura/interfaces/factura';
import { FacturaService } from 'src/app/pages/mis-pacientes/factura/services/factura.service';

@Component({
  selector: 'app-todas-las-facturas',
  templateUrl: './todas-las-facturas.component.html',
  styleUrls: ['./todas-las-facturas.component.css']
})
export class TodasLasFacturasComponent {
  facturas:Factura[] = []
  cols: any[] = [
    { field: 'Paciente', subfield: 'nombre', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]

  constructor(private facturaSVC:FacturaService){}

  ngOnInit(): void {
    this.facturaSVC.getFacturas().subscribe((data) => {
      this.facturas= data;
    })
  }
}
