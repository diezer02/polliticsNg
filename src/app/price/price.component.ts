import { Politician } from '../beans/politician';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {
  politician: Politician ;
  rateValue: number;
  @Output() rated: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private el : ElementRef) {
   }

  ngOnInit() {
  }
  rate(note : number){
    this.rateValue = note;
    
    this.rated.emit();
  }
}
