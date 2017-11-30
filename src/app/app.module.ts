import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './sliders/slider/slider.component';
import { PriceComponent } from './price/price.component';
import { PoliticiansService } from './sliders/politicians.service';
import { SlidersComponent } from './sliders/sliders.component';
import { DraggableDirective } from './draggable.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    PriceComponent,
    SlidersComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [PoliticiansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
