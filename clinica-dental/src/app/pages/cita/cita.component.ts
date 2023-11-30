import { Component, OnInit } from '@angular/core';
import { Cita } from './interfaces/cita';
import { CitaService } from './services/cita.service';
import { Message, MessageService } from 'primeng/api';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Paciente, Usuario } from '../auth/interfaces/usuario';
import { AuthService } from '../auth/services/auth.service';
import * as moment from 'moment/moment.js';


@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
  providers: [MessageService]
})
export class CitaComponent implements OnInit {
  citas: Cita[] = [];
  visible: boolean = false;
  selectedCita!: Cita;
  public options: any;
  pacientes?: Paciente[];
  selectedPaciente: any;
  value: string = ""
  user!: Usuario | null;

  cols = [
    { field: 'fecha', header: 'Fecha' },
    { field: 'hora', header: 'Hora' },
    { field: 'motivo', header: 'Motivo' },
    { field: 'rol_consulta', header: 'Tipo' }
  ];

  constructor(
    private citaSvc: CitaService,
    private messageService: MessageService,
    private userSvc: UsuarioService,
    private authSvc: AuthService
  ) {

    this.loadAppointments();

  }

  onSelectChange(event: any): void {
    const fecha = document.getElementById('fecha')
    this.citaSvc.getAppointmentsByFecha(this.user?.user.id, fecha)).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
    this.pacientes = [];
    this.loadPacientes();
    
  }

  loadPacientes() {
    this.userSvc.getPacientes().subscribe(
      (data) => {
        this.pacientes = data;
      }
    );
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
