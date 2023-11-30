import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Citas',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Calendario',
            icon: 'pi pi-calendar-plus',
            routerLink: ['/adminView/citas/calendario'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Reportes',
            icon: 'pi pi-fw pi-list',
            items: [
              {
                label: 'Todas las citas',
                icon: 'pi pi-book',
                routerLink: ['/adminView/todascitas/reporte'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              },
              {
                label: 'Por urgencia',
                icon: 'pi pi-book',
                routerLink: ['/adminView/rol/urgencia'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              },
              {
                label: 'Por cita común',
                icon: 'pi pi-book',
                routerLink: ['/adminView/rol/cita'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              }
            ]
          },
        ]
      },
      {
        label: 'Facturas',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Reportes',
            icon: 'pi pi-fw pi-list',
            items: [
              {
                label: 'Todas las facturas',
                icon: 'pi pi-book',
                routerLink: ['/adminView/todasfacturas/reporte'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              },
              {
                label: 'Por urgencia',
                icon: 'pi pi-book',
                routerLink: ['/adminView/rol/urgencia'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              },
              {
                label: 'Por cita común',
                icon: 'pi pi-book',
                routerLink: ['/adminView/rol/cita'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              }
            ]
          },
        ]
      },
      {
        label: 'Tratamientos',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Reportes',
            icon: 'pi pi-fw pi-list',
            items: [
              {
                label: 'Todas los los tratamientos',
                icon: 'pi pi-book',
                routerLink: ['/adminView/todostratamientos/reporte'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              },
              {
                label: 'Vista para el usuario',
                icon: 'pi pi-book',
                routerLink: ['/adminView/cliente/vista'], // Cambia a la ruta deseada
                routerLinkActiveOptions: { exact: true },
              }
            ]
          },
        ]
      },
      {
        label: 'Pagos',
        icon: 'pi pi-credit-card',
        items: [
          {
            label: 'Listar pagos',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/adminView/pagos/listar'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Historial clínico',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Listar historial',
            icon: 'pi pi-fw pi-sitemap',
            routerLink: ['/adminView/historial/listar'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      }
    ];
  }
}
