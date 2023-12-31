import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input('items') items: MenuItem[] | undefined;
  @Input('rol') rol !: string;

  ngOnInit() {
    
  }
}
