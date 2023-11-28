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
          },
          {
            label: 'Listar facturas',
            icon: 'pi pi-fw pi-list',
            routerLink:"verfacturas"
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
          },
          {
            label: 'Listar pagos',
            icon: 'pi pi-fw pi-list'
          },
        ]
      },
      {
        label: 'Historial clínico',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Por pacientes',
            icon: 'pi pi-fw pi-sitemap'
          },
          {
            label: 'Mis pacientes',
            icon: 'pi pi-fw pi-user'
          }
        ]
      }
    ];
  }
}
