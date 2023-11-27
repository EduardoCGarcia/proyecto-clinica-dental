import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita/interfaces/cita';
import { CitaService } from '../cita/services/cita.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{

  public citas: {
      title: string;
      start: Date;
      end: Date;
  } []= [];

  public options : any;
  apointments: Cita[] = [];

  constructor(private citaSvc:CitaService) { 
  }

  ngOnInit() {
    this.citaSvc.getAppointments().subscribe(
      (data) => {
        this.apointments = data;
        console.log(this.apointments);
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
      businessHours: [
      {
        daysOfWeek: [ 1, 2, 3, 4, 5], // dias de semana, 0=Domingo
        startTime: '9:00', // hora final
        endTime: '20:00', // hora inicial
      },
      {
        daysOfWeek: [ 6 ], // dias de semana, 0=Domingo
        startTime: '9:00', // hora final
        endTime: '20:00', // hora inicial
      }
      ],
      editable: true,
      selectable:true,
      selectMirror: true,
    
    }
    
  }

}
