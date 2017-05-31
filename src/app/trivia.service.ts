import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TriviaService {

  private triviaUrl = 'https://opentdb.com/api.php?amount=20&category=29';

  constructor() { }
  getQuestions(): Promise<Hero[]> {
    return this.http.get(this.triviaUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError () {}
}
