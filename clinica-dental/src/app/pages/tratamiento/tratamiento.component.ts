import { Component, OnInit } from '@angular/core';
import { Tratamiento } from './interfaces/tratamiento';
import { TratamientoService } from './service/tratamiento.service';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.component.html',
  styleUrls: ['./tratamiento.component.css']
})
export class TratamientoComponent implements OnInit {
  tratamientos!: Tratamiento[];

  constructor(private tratamientoService: TratamientoService) { }

  ngOnInit(): void {
    this.getTratamientos();
  }

  getTratamientos(): void {
    this.tratamientoService.getTratamientos()
      .subscribe(tratamientos => this.tratamientos = tratamientos);
  }
}
