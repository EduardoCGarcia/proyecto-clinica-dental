import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mis-pacientes',
  templateUrl: './mis-pacientes.component.html',
  styleUrls: ['./mis-pacientes.component.css']
})
export class MisPacientesComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Facturas',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/mis-pacientes/facturas/nueva'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Listar facturas',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/mis-pacientes/facturas/ver'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Pagos',
        icon: 'pi pi-credit-card',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/mis-pacientes/pago/crear'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: false },
          },
          {
            label: 'Listar pagos',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/mis-pacientes/pago/listar'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      },
      {
        label: 'Historial clínico',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Por pacientes',
            icon: 'pi pi-fw pi-sitemap',
            routerLink: ['/mis-pacientes/historial/porPaciente'], // Cambia a la ruta deseada
            routerLinkActiveOptions: { exact: true },
          },
        ]
      }
    ];
  }
}
