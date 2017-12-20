import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './sliders/slider/slider.component';
import { PriceComponent } from './price/price.component';
import { PoliticiansService } from './sliders/politicians.service';
import { SlidersComponent } from './sliders/sliders.component';
import { DraggableDirective } from './draggable.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReponsesComponent } from './questions/question/reponses/reponses.component';
import { ReponseComponent } from './questions/question/reponses/reponse/reponse.component';
import { PoliticiansComponent } from './politicians/politicians.component';
import { PoliticianComponent } from './politicians/politician/politician.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    PriceComponent,
    SlidersComponent,
    DraggableDirective,
    LoginComponent,
    HeaderComponent,
    QuestionComponent,
    QuestionsComponent,
    ReponsesComponent,
    ReponseComponent,
    PoliticiansComponent,
    PoliticianComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule, AppRoutingModule
  ],
  
  providers: [PoliticiansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
