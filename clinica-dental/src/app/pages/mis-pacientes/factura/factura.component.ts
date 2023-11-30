import { Component } from '@angular/core';
import { Factura } from './interfaces/factura';
import { FacturaService } from './services/factura.service';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/usuario';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  facturas: Factura[] = [];
  cols :any[] = [
    {field:'Paciente', subfield:'nombre', header:'Nombre'},
    {field:'Paciente', subfield:'primerApellido', header:'Primer Apellido'},
    {field:'Dentista', subfield:'nombre', header:'Dentista'},
    {field:'monto_total', subfield:'', header:'Total'},
    {field:'saldo_deudor', subfield:'', header:'Por pagar'},
    {field:'fecha_emision', subfield:'', header:'Emitida'},
  ]
  user!: Usuario | null;

  constructor(private facturasService: FacturaService, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    this.loadFacturas();
  }

  loadFacturas(): void {
    this.facturasService.getFacturasParms(this.user?.user.rol,this.user?.user.id).subscribe(data => {
      this.facturas = data;
      console.log(data);
      
    });
  }
}
