import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input('filas') items!: any[];
  @Input('columnas') cols!: any[];
  @Input('tableStyle') tableStyle!: any;

  constructor() { }

  ngOnInit() {
    console.log(this.items);

  }
}
