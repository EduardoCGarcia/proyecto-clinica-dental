import { Component } from '@angular/core';
import { Factura } from './interfaces/factura';
import { FacturaService } from './services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  facturas: Factura[] = [];

  constructor(private facturasService: FacturaService) { }

  ngOnInit(): void {
    this.loadFacturas();
  }

  loadFacturas(): void {
    this.facturasService.getFacturas().subscribe(data => {
      this.facturas = data;
      console.log(data);
      
    });
  }
}
