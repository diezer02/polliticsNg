import { Response } from './response';
export class Question {
  
  public responseList : Response[];
  public idQuestion : number;
  public questionWording: string; 
  public totalResponseNumber: number;
  public questionType : string;
  public creationDate : Date;
  public idLinkedQuestion: number;
  constructor(responseList : Response[], idQuestion : number, questionWording: string, totalResponseNumber: number, questionType : string, creationDate : Date, idLinkedQuestion: number){}

}