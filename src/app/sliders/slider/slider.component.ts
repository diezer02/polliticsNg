import { PoliticiansService } from '../politicians.service';
import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, ElementRef } from '@angular/core';
import { trigger,  state,  style,  animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('heroState', [ 
      state('inactive', style({
        
      })),
      state('active',   style({
        left: '0px',
        top: '0px'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() politician: Politician;
  @Input() cardType : string;
  @Input() percentRange : number;
  @Input() delta : Position;
  @Input() widthRange : number;
  private elX: number;
  private elY: number;
  private heightEl: number;
  private widthEl: number;
  private resetToPosition = 'inactive';
  
  constructor(private politicianService: PoliticiansService, private el: ElementRef) { }
  
  ngOnInit() {
    console.log(this.politician);
    
  }
   animation( event : Position ){
       if ( this.widthRange == null ){ this.widthRange = 0; }
       if ( this.widthEl == null || this.heightEl == null ){
              this.heightEl = this.el.nativeElement.offsetHeight;
              this.widthEl =  this.el.nativeElement.offsetWidth;
       }
      if( event.isUnleashed() ){
        console.log(event.isUnleashed());
        this.resetToPosition = 'active';
          // this.el.nativeElement.firstChild.style.cssText = "";
      }else{
         this.resetToPosition = 'inactive';
      }
      if ( this.cardType === 'Left'){
        if ( event.getDx() * this.widthRange / 100 < this.percentRange ){
        // this.heightEl = this.heightEl - event.getDx();
          // this.el.nativeElement.firstChild.style.height = this.heightEl + 'px';
         // console.log("dX: "+event.getDx()+" height: "+this.el.nativeElement.firstChild.offsetHeight);
        }
      }
      if ( this.cardType === 'Center'){
        
      }
      if ( this.cardType === 'Right'){
        if ( event.getDx() * this.widthRange / 100 > this.percentRange ){
           // this.el.nativeElement.firstChildstyle.height = this.heightEl + event.getDx() + 'px';
        }else{
      
          if( event.isUnleashed() ){
            // this.el.nativeElement.firstChild.style.cssText = "";
          }
          
        }
      }
    
  }

}
export class Politician {
  constructor(name : string, firstName : string, imgUrl : string){ }
  
 
}

export class Position {
  constructor(private dX: number, private dY: number, private isUnleash: boolean){}
  getDx(){return this.dX;  }
  getDy(){return this.dY;  }
  isUnleashed(){return this.isUnleash; }
}
