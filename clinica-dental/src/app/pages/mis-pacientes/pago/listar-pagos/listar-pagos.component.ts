import { Component } from '@angular/core';
import { PagoService } from '../services/pago.service';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { Pago } from '../interfaces/pago';
import { Usuario } from 'src/app/pages/auth/interfaces/usuario';
import { Factura } from '../../factura/interfaces/factura';
import { FacturaService } from '../../factura/services/factura.service';

@Component({
  selector: 'app-listar-pagos',
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.css']
})
export class ListarPagosComponent {
  pago: Pago[] = [];
  cols: any[] = [
    { field: 'id_factura', subfield: '', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]
  user!: Usuario | null;

  constructor(private pagoService: PagoService, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    console.log("Id usuario actual " + this.user?.user.id);
    this.loadPagos();
  }

  loadPagos(): void {
    this.pagoService.getPago(this.user?.user.id).subscribe(data => {
      this.pago = data
    });
  }
}
