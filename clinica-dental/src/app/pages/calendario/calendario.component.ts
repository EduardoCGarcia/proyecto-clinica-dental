import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita/interfaces/cita';
import { CitaService } from '../cita/services/cita.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { AuthService } from '../auth/services/auth.service';
import { Usuario } from '../auth/interfaces/usuario';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public citas: {
    title: string;
    start: Date;
    end: Date;
  }[] = [];

  public options: any;
  apointments: Cita[] = [];

  user!: Usuario | null;

  constructor(private citaSvc: CitaService, private authSvc: AuthService) {
  }

  ngOnInit() {
    this.citaSvc.getAppointments().subscribe(
      (data) => {
        var lista: { title: string; start: Date; end: Date; }[] = []
        console.log(data);
        data.forEach(element => {
          let horaInicio = element.hora.toString().split(":")
          let fecha = element.fecha.toString().split("-");
          let item = {
            title: "Cita de " + element.Paciente.nombre,
            start: new Date(Number(fecha[0]), Number(fecha[1]) - 1, Number(fecha[2]), Number(horaInicio[0]), Number(horaInicio[1])),
            end: new Date(Number(fecha[0]), Number(fecha[1]) - 1, Number(fecha[2]), Number(horaInicio[0]), 59)
          }
          console.log(item);
          lista.push(item);
        });
        this.citas = lista;
      }
    );


    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      locales: esLocale,
      contentHeight: 'auto',
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: this.citas,
      businessHours: [
        {
          daysOfWeek: [1, 2, 3, 4, 5], // dias de semana, 0=Domingo
          startTime: '9:00', // hora final
          endTime: '20:00', // hora inicial
        },
        {
          daysOfWeek: [6], // dias de semana, 0=Domingo
          startTime: '9:00', // hora final
          endTime: '20:00', // hora inicial
        }
      ]

    }


    this.authSvc.user$.subscribe((usuario: Usuario | null) => {
      this.user = usuario;
    })
  }

}
