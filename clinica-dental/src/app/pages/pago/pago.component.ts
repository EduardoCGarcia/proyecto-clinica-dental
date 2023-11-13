import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagoService } from './services/pago.service';
import { Pago } from './interfaces/pago';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  pagos!: Pago[];

  constructor(
    private pagoService: PagoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const idFactura =+ params.get('idFactura');
      if (idFactura) {
        this.getPagosByFactura(idFactura);
      }
    });
  }

  getPagosByFactura(idFactura: number): void {
    this.pagoService.getPagosByFactura(idFactura)
      .subscribe(pagos => this.pagos = pagos);
  }
}
