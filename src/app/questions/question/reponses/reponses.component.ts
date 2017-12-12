import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../../beans/response';


@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css']
})
export class ReponsesComponent implements OnInit {
  
  @Input() list : Response
  constructor() { }

  ngOnInit() {
  }

}
