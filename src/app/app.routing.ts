import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoliticianComponent } from './politicians/politician/politician.component';
import { QuestionsComponent } from './questions/questions.component';
import { SlidersComponent } from './sliders/sliders.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
       { path: 'login',           component: LoginComponent},
       { path: 'question',           component: QuestionsComponent },
       { path: 'politician',           component: PoliticianComponent},
       { path: 'home',           component: HomeComponent },
      { path: '',               redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
