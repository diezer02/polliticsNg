import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../../../beans/response';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  @Input() ref : Response;
  constructor() { }

  ngOnInit() {
  }

}
