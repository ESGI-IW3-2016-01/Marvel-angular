import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-trivia-detail',
  templateUrl: './trivia-detail.component.html',
  styleUrls: ['./trivia-detail.component.css'],
  providers: [TriviaService]
})
export class TriviaDetailComponent implements OnInit {

  trivia = this.triviaService.getTrivia();
  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
  }

}
