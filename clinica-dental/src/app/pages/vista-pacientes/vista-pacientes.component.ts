import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-vista-pacientes',
  templateUrl: './vista-pacientes.component.html',
  styleUrls: ['./vista-pacientes.component.css']
})
export class VistaPacientesComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Citas',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Nueva Cita',
            icon: 'pi pi-save',
            routerLink: ['/pacientesView/citas/nueva'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Calendario',
            icon: 'pi pi-calendar-plus',
            routerLink: ['/pacientesView/citas/ca endario'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Nuevos tratamientos',
        icon: 'pi pi-bookmark-fill',
        routerLink: ['/pacientesView/tratamientos'], // Cambia a la ruta deseada
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Pagos realizados',
        icon: 'pi pi-bookmark-fill',
        routerLink: ['/pacientesView/pagosrealizados'], // Cambia a la ruta deseada
        routerLinkActiveOptions: { exact: false },
      },
      {
        label: 'Historial clínico',
        icon: 'pi pi-database',
        routerLink: ['/pacientesView/historialClinico'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
      }
    ];
  }
}
