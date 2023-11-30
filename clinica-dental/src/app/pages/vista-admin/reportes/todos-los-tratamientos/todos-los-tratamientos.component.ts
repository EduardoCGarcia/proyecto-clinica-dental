import { Component } from '@angular/core';
import { Tratamiento } from 'src/app/pages/tratamiento/interfaces/tratamiento';
import { TratamientoService } from 'src/app/pages/tratamiento/service/tratamiento.service';

@Component({
  selector: 'app-todos-los-tratamientos',
  templateUrl: './todos-los-tratamientos.component.html',
  styleUrls: ['./todos-los-tratamientos.component.css']
})
export class TodosLosTratamientosComponent {
  tratamientos:Tratamiento[] = []
  cols: any[] = [
    { field: 'Paciente', subfield: 'nombre', header: 'No.Factura' },
    { field: 'fecha', subfield: '', header: 'Fecha' },
    { field: 'monto', subfield: '', header: 'Cantidad' },
    { field: 'forma_de_pago', subfield: '', header: 'Forma de Pago' },
    { field: 'observaciones', subfield: '', header: 'Observaciones' },

  ]

  constructor(private tartamientoSVC:TratamientoService){}

  ngOnInit(): void {
    this.tartamientoSVC.getTratamientos().subscribe((data) => {
      this.tratamientos= data;
      console.log(data);
      
    })
  }


  layout: string = 'list';
}
