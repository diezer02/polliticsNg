import {Politician, SliderComponent} from './slider/slider.component';
import { PoliticiansService } from './politicians.service';
import { Component, OnInit, ViewEncapsulation, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SlidersComponent implements OnInit {
  politicians: Politician[];
  polR: Politician;
  polC: Politician;
  polL: Politician;
  width: number;
  
  
  constructor(private politicianService: PoliticiansService, private el: ElementRef) {
  
    
    
  }

  ngOnInit() {
    this.politicians = this.politicianService.getPoliticians();
    this.politicianService.update(1);
    this.polC = this.politicianService.getCenter();
    this.polL = this.politicianService.getLeft();
    this.polR = this.politicianService.getRight();
    this.width = this.el.nativeElement.offsetWidth;
  }

}
