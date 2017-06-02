import { Injectable } from '@angular/core';
import {Trivia} from './trivia';
import {Http} from '@angular/http';

/**
 * Get Questions and Answers from OpenTriviaAPI
 * https://opentdb.com/api_config.php
 * Using Entertainment: Comics category only
 */
@Injectable()
export class TriviaService {

  /* URL to call */
  private triviaUrl = 'https://opentdb.com/api.php?amount=10&category=29';

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // call the api to retrieve questions
  getTrivia(): Promise<Trivia[]> {

    return this.http.get(this.triviaUrl)
      .toPromise()
      .then((response) => {
        return response.json().results.map((value) => {
          const tri = new Trivia();
          tri.difficulty = value.difficulty;
          tri.category = value.category;
          tri.correct_answer = value.correct_answer;
          tri.question = value.question;
          tri.type = value.type;
          tri.all_answers = [];
          tri.all_answers.push(value.correct_answer);
          value.incorrect_answers.forEach((element) => {
            tri.all_answers.push(element);
          });
          tri.all_answers.sort();
          return tri;
        });
      })
      .catch(TriviaService.handleError);
  }

  constructor(private http: Http) {
  }
}
