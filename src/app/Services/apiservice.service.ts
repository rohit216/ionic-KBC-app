import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url = "https://kbc-quiz.herokuapp.com/";
 httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };

  constructor(private client : HttpClient) { }

  getQuestion(id){
    return this.client.get(`${this.url}loadQuestions?id=${id}`,this.httpOptions);
  }
  
  verifyAnswer(id,answer){
    return this.client.get(`${this.url}checkAnswer?id=${id}&option=${answer}`)
  }

}
