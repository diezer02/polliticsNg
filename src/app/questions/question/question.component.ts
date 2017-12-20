import { Question } from '../../beans/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() ref : Question;
   public areaId : string ;
   public headingId : string ;
  public hRefAreaId : string ;
  constructor() { }

  ngOnInit() {
    this.areaId = 'collapse' + this.ref.idQuestion;
    this.headingId = 'heading' + this.ref.idQuestion;
    this.hRefAreaId = '#' + this.areaId;
  }
 
}
