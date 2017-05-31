import { Injectable } from '@angular/core';


@Injectable()
export class TriviaService {

  private triviaUrl = 'https://opentdb.com/api.php?amount=20&category=29';

  constructor() { }
}
