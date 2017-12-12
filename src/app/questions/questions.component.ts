import { Question } from '../beans/question';
import { Component ,  OnInit } from '@angular/core';

@Component({
  selector :  'app-questions' , 
  templateUrl :  './questions.component.html' , 
  styleUrls :  ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  private questionList :  Question[];
  constructor( ) { }

  ngOnInit() {
    this.questionList = [{'idQuestion' : 4 , 'questionWording' : 'Que pensez vous du bilan de Christiane Taubira ?' , 'totalResponseNumber' : 4596 , 'questionType' : 'ECONOMIE' , 'creationDate' : null , 'idLinkedQuestion' : null , 'responseList' : [{'idResponse' : 0 , 'responseWording' : 'Très satisfaisant' , 'totalResponseNumber' : 10000} , {'idResponse' : 0 , 'responseWording' : 'Satisfaisant' , 'totalResponseNumber' : 5000} , {'idResponse' : 0 , 'responseWording' : 'Pas très satisfaisant' , 'totalResponseNumber' : 7000} , {'idResponse' : 0 , 'responseWording' : 'Pas satisfaisant' , 'totalResponseNumber' : 9000}]} , {'idQuestion' : 2 , 'questionWording' : 'Que pensez vous du bilan de François Hollande ?' , 'totalResponseNumber' : 4596 , 'questionType' : 'ECONOMIE' , 'creationDate' : null , 'idLinkedQuestion' : null , 'responseList' : null} , {'idQuestion' : 3 , 'questionWording' : 'Que pensez vous du bilan de Nicolas Sarkozy ?' , 'totalResponseNumber' : 4596 , 'questionType' : 'ECONOMIE' , 'creationDate' : null , 'idLinkedQuestion' : null , 'responseList' : [{'idResponse' : 0 , 'responseWording' : 'Très satisfaisant' , 'totalResponseNumber' : 10000} , {'idResponse' : 0 , 'responseWording' : 'Satisfaisant' , 'totalResponseNumber' : 5000} , {'idResponse' : 0 , 'responseWording' : 'Pas très satisfaisant' , 'totalResponseNumber' : 7000} , {'idResponse' : 0 , 'responseWording' : 'Pas satisfaisant' , 'totalResponseNumber' : 9000}]}]
  }

}
