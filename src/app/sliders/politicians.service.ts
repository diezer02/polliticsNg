import { Politician } from './slider/slider.component';
import { Injectable } from '@angular/core';

@Injectable()
export class PoliticiansService {
  private polLeft: Politician;
  private polRight: Politician;
  private polCenter: Politician;
  private politicians: Politician[] = [
        {name : 'Chirac', firstName : 'Jacques', imgUrl : 'http://welikeit.fr/wp-content/uploads/2014/02/chirac.jpg'},
        {name : 'Macron', firstName : 'Emmanuel', imgUrl : 'http://scd.en.rfi.fr/sites/english.filesrfi/imagecache/rfi_large_600_338/sites/images.rfi.fr/files/aef_image/000_mg252_0.jpg'},
        {name : 'Sarkozy', firstName : 'Nicolas', imgUrl : 'http://resize-parismatch.ladmedia.fr/rcrop/635,500,forcex,center-middle/ext/65026e98/francedimanche/2016-03/nicolas-sarkozy.png'}
  ];
  
  getPoliticians() {
    return this.politicians.slice();
  }
  
  init(){
    this.polCenter = this.politicians[0];
    this.polRight = this.politicians[1];
    
  }
  update( index : number ){
    if ( index >= 0 && this.politicians.length >= index){
     this.polLeft = this.politicians[index - 1]; 
    }
    if ( index >= 0 && this.politicians.length >= index + 1){
      this.polCenter = this.politicians[index];
    }
    if ( index >= 0 && this.politicians.length >= index + 2){
      this.polRight = this.politicians[index + 1];
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
