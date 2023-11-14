import { Component } from '@angular/core';
import { Cita } from './interfaces/cita';
import { CitaService } from './services/cita.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
  providers: [MessageService]
})
export class CitaComponent {
  citas: Cita[] = [];
  visible: boolean = false;
  selectedCita!: Cita;

  constructor(
    private citaSvc: CitaService,
    private messageService: MessageService
  ) {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.citaSvc.getAppointments().subscribe(
      (data) => {
        this.citas = data;
      }
    );
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }
  onSelectCita(cita: Cita): void {
    this.selectedCita = { ...cita };
  }

  onDeleteCita(id: number): void {
    this.citaSvc.deleteCita(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Cita eliminada correctamente',
        });
        this.loadAppointments();
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al eliminar la cita',
        });
      }
    );
  }


}
