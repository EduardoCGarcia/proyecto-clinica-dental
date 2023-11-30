import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-vista-admin',
  templateUrl: './vista-admin.component.html',
  styleUrls: ['./vista-admin.component.css']
})
export class VistaAdminComponent implements OnInit{
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
            label: 'Reporte',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/adminView/citas/reporte'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Facturas',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Listar facturas',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/adminView/facturas/ver'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Tratamientos',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Listar Tratamientos',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/adminView/facturas/lista'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
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
