import { Politician } from '../sliders/slider/slider.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {
  politician: Politician ;
  constructor() { }

  ngOnInit() {
  }

}
