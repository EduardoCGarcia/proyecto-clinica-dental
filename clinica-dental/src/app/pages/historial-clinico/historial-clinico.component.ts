import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialClinico } from './interfaces/historial-clinico';
import { HistorialClinicoService } from './services/historial-clinico.service';

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css'],
})
export class HistorialClinicoComponent implements OnInit {
  historialesClinicos: HistorialClinico[] = [];

  constructor(
    private route: ActivatedRoute,
    private historialClinicoService: HistorialClinicoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      const idPaciente = +params.get('idPaciente');
      this.historialClinicoService
        .getHistorialesByPaciente(idPaciente)
        .subscribe((historiales) => {
          this.historialesClinicos = historiales;
        });
    });
  }
}
