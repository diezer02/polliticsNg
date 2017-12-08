import { Politician } from './slider/slider.component';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PoliticiansService {
  private polLeft: Politician;
  private polRight: Politician;
  private polCenter: Politician;
  private index = 0;
  private politicians: Politician[] = [
        {name : 'Chirac', firstName : 'Jacques', imgUrl : 'http://welikeit.fr/wp-content/uploads/2014/02/chirac.jpg'},
        {name : 'Macron', firstName : 'Emmanuel', imgUrl : 'http://scd.en.rfi.fr/sites/english.filesrfi/imagecache/rfi_large_600_338/sites/images.rfi.fr/files/aef_image/000_mg252_0.jpg'},
        {name : 'Sarkozy', firstName : 'Nicolas', imgUrl : 'http://resize-parismatch.ladmedia.fr/rcrop/635,500,forcex,center-middle/ext/65026e98/francedimanche/2016-03/nicolas-sarkozy.png'}
  ];
  public indexChanged : EventEmitter< boolean > =  new EventEmitter<boolean>();
  getPoliticians() {
    return this.politicians.slice();
  }
  
  init(){
    this.polCenter = this.politicians[0];
    this.polRight = this.politicians[1];
    
  }
  getFactorielle(a: number, b: number){
     return (a > b) ? Math.trunc( a / b ) :  Math.trunc(  b / a )  ;
  }
  update( index : number ){
    this.index = index;//(index == this.politicians.length ) ? 0: ( index == -1) ? this.politicians.length : index;
    let n : number;
    
    
    console.log( 'index: ' + this.index);
    let leftIndex : number;
    
    if ( this.index - 1 >= 0 && this.politicians.length >=  this.index){
     leftIndex = this.index - 1 ;
     this.polLeft = this.politicians[this.index - 1]; 
    }else if ( this.index <= 0 ){
      n = this.getFactorielle(this.index, this.politicians.length );
      leftIndex =  n * this.politicians.length + this.index;
      this.polLeft = this.politicians[leftIndex];
    }else if ( this.index - 2 >= this.politicians.length - 1 ){
       n = this.getFactorielle(this.index, this.politicians.length + 1);
      leftIndex = - (  n * this.politicians.length + 1 ) + ( this.index );
      this.polLeft = this.politicians[ leftIndex];
    }
     console.log( 'facteur: ' + (n) );
   
     let centerIndex : number;
    if (  this.index >= 0 && this.politicians.length >=  this.index + 1){
      centerIndex = this.index;
      this.polCenter = this.politicians[centerIndex];
    }else if ( this.index - 1 <= 0 ){
       n = this.getFactorielle(this.index - 1, this.politicians.length );
     
      centerIndex =  n * this.politicians.length + ( this.index - 1 ) ;
      this.polCenter = this.politicians[ centerIndex ];
    }else if ( this.index - 1 >= this.politicians.length - 1){
       n = this.getFactorielle(this.index, this.politicians.length );
      centerIndex = - ( n * this.politicians.length ) + (this.index );
      this.polCenter = this.politicians[ centerIndex ];
    }
     console.log( 'facteur: ' + (n) );
   
    let rightIndex : number;
    if (  this.index + 1 >= 0 && this.politicians.length >=  this.index + 2){
      rightIndex = this.index + 1;
      this.polRight = this.politicians[ rightIndex ];
    }else if ( this.index - 2 < 0 ){
       n = this.getFactorielle(this.index - 2, this.politicians.length );
     
      rightIndex = n * this.politicians.length + (this.index - 2);
      this.polRight = this.politicians[ rightIndex ];
    }else if ( this.index >= this.politicians.length - 1 ){
       n = this.getFactorielle(this.index, this.politicians.length - 1 );
     
      rightIndex = - (n * this.politicians.length - 1) + (this.index );
      this.polRight = this.politicians[ rightIndex ];
    }
     console.log( 'facteur: ' + (n) );
   
    
   // console.log("left: "+ this.polLeft.name + " center: " + this.polCenter.name + " right: " + this.polRight.name);
    this.indexChanged.emit(true);
  }
  swipe (isRight: boolean ){
    if ( isRight ){
      this.update( this.index + 1);
    }
  }
  getRight(){
    return this.polRight;
  }
  getLeft(){
    return this.polLeft;
  }
  getCenter(){
    return this.polCenter;
  }
}
