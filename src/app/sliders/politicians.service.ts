import { Politician } from '../beans/politician';
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
    if ( a === 0 || b === 0) return 0;
     return (a > b) ? Math.trunc( a / b ) :  Math.trunc(  b / a )  ;
  }
  update( index : number ){
    this.index = index;
    
    this.polRight = this.politicians[this.getIndex(this.index)];
    this.polCenter = this.politicians[this.getIndex(this.index + 1)];
    this.polLeft = this.politicians[this.getIndex(this.index + 2)];
   
    
   // console.log("left: "+ this.polLeft.name + " center: " + this.polCenter.name + " right: " + this.polRight.name);
    this.indexChanged.emit(true);
  }
  
  getIndex(index: number){
     if ( index === -4 ) {
      this.index = this.politicians.length - 2;  
      return this.index;
     }
    if ( index === this.politicians.length + 2 ){
      this.index = 0;
      return this.index
    }  
    if ( index < 0){
      index = this.politicians.length + index;
      return index;
    } 
    if ( index >= this.politicians.length){
      index -= this.politicians.length ;
      return index;
    } 
    if ( index === this.politicians.length ) return (- this.politicians.length + index);
    
    return index;
  }
  
  swipe (isRight: boolean ){
    if ( isRight ){
      this.update( this.index + 1);
    }else{
      this.update( this.index - 1);
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
  getPolitician( id : number){
    return this.politicians[0]
  }
}
