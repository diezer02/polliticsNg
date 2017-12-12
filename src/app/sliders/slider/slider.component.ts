import { Politician } from '../../beans/politician';
import { PoliticiansService } from '../politicians.service';
import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, ElementRef, HostListener } from '@angular/core';
import { trigger,  state,  style,  animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('heroState', [ 
      state('inactive', style({
        opacity: 1
      })),
      state('active',   style({
        left: '0px',
        top: '0px',
        opacity: 1
      })),
      state('selected',   style({
        left: '100%',
        top: '0px',
        opacity: 0
      })),
      state('rejected',   style({
        right: '100%',
        top: '0px',
        opacity: 0
      })),
       state('allLeft',   style({
        left: '100%',
        top: '0px'
      })),
      state('allRight',   style({
        left: '-100%',
        top: '0px'
      })),
      
      transition('* => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out')),
      transition('* => selected', animate('1000ms ease-out')),
      transition('* => rejected', animate('1000ms ease-out')),
      transition('* => allLeft', animate('10ms ease-out')),
       transition('* => allRight', animate('10ms ease-out'))
    ]),
      trigger('posState', [ 
      state('neutral', style({
        
      })),
      state('validate',   style({
        backgroundColor: 'green'
      })),
      state('reject',   style({
       backgroundColor: 'red'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
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
  private cardStyle = 'neutral';
  
  constructor(private politicianService: PoliticiansService, private el: ElementRef) {
    this.elX = 0;
    
   }
  
  ngOnInit() {
    console.log(this.politician);
    
  }
  
    gesture(event: any) {
     console.log(event);
      if ( event.toState === 'selected'){
         this.politicianService.swipe(false);
         this.cardStyle = 'neutral';
        this.resetToPosition = 'allRight';
        // TODO event de validation
      }else if ( event.toState === 'allLeft'){
        this.resetToPosition = 'active';
      }else if ( event.toState === 'allRight'){
        this.resetToPosition = 'active';
      }else if ( event.toState === 'rejected'){
        this.politicianService.swipe(true);
        this.cardStyle = 'neutral';
         this.resetToPosition = 'allLeft';
        
      }else if ( event.toState === 'active' || event.toState === 'inactive'){
        this.elX = 0;
        this.elY = 0;
      }
      if ( event.toState === 'active'){
         this.resetToPosition = 'inactive';
      }
    //  this.politicianService.swipe(true);
   }
  
   animation( event : Position ){
      
       this.elX +=  event.getDx();
       this.elY +=  event.getDy();
       if ( this.widthRange == null ){ this.widthRange = 300; }
       if ( this.widthEl == null || this.heightEl == null ){
              this.heightEl = this.el.nativeElement.offsetHeight;
              this.widthEl =  this.el.nativeElement.offsetWidth;
       }
     
     
      if ( this.cardType === 'Center'){
        if ( this.elX  * 100 / this.widthRange < -this.percentRange ){
          this.cardStyle = 'validate';
          if ( event.isUnleashed() ) this.resetToPosition = 'selected';
        }else if ( this.elX  * 100 / this.widthRange  > this.percentRange ){
          this.cardStyle = 'reject';
            if ( event.isUnleashed() ) this.resetToPosition = 'rejected';
        }else{
           this.cardStyle = 'neutral';
           if ( event.isUnleashed() ) this.resetToPosition = 'active';
        }
      }else{
         if ( event.isUnleashed() ){
          console.log(event.isUnleashed());
          this.resetToPosition = 'active';
          this.cardStyle = 'neutral';
            // this.el.nativeElement.firstChild.style.cssText = "";
        }else{
           this.resetToPosition = 'inactive';
        }
      }
      console.log(' currentPercentage:' + this.elX + ' widthRange:' + this.widthRange + ' maxPercentage: ' + this.percentRange + ' currentPercentage:' + this.elX  * 100 / this.widthRange  );
      
  }

}


export class Position {
  constructor(private dX: number, private dY: number, private isUnleash: boolean){}
  getDx(){return this.dX;  }
  getDy(){return this.dY;  }
  isUnleashed(){return this.isUnleash; }
}
