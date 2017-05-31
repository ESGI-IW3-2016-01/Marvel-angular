import { Injectable } from '@angular/core';
import {Trivia} from './trivia';
import {Http} from '@angular/http';

@Injectable()
export class TriviaService {

  private triviaUrl = 'https://opentdb.com/api.php?amount=10&category=29';

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTrivia(): Promise<Trivia[]> {

    return this.http.get(this.triviaUrl)
      .toPromise()
      .then((response) => {
        return response.json().results;
      })
      .catch(TriviaService.handleError);
  }

  constructor(private http: Http) {
  }
}
