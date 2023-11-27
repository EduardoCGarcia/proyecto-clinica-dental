import { Component, Input } from '@angular/core';
import { Tratamiento } from '../../interfaces/tratamiento';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input('items') items: Tratamiento[] = [];
  @Input('numVisible') numVisible!: number;
  @Input('numScroll') numScroll!: number;
  @Input('circular') circular: boolean = false;
  @Input('responsiveOptions') responsiveOptions: any = [];
  @Input('autoplayInterval') autoplayInterval: number = 2000;

  constructor(){}

}
