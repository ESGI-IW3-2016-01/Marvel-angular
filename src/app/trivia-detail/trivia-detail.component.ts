import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-trivia-detail',
  templateUrl: './trivia-detail.component.html',
  styleUrls: ['./trivia-detail.component.css'],
  providers: [TriviaService]
})
export class TriviaDetailComponent implements OnInit {

  trivias = this.triviaService.getTrivia();
  localStorageKey = 'ranking';
  currentRanking: {};
  constructor(private triviaService: TriviaService) { }

  ngOnInit() {
    this.getAll();
  }

  clicked() {
    let result = 0;
    for (let i = 0; i < 10; i++) {
      const choice = document.querySelector('input[name = "answer' + i + '"]:checked');

      if (!choice) {
        break;
      }
      const correctAnswer =  document.querySelector('input[name = "correct' + i + '"]');
      if ((<HTMLInputElement>choice).value === (<HTMLInputElement>correctAnswer).value) {
        result ++;
      }
    }
    const name = ((<HTMLInputElement>document.getElementById('Name')).value);

    if (name) {
      let ranking = JSON.parse(localStorage.getItem(this.localStorageKey));
      if (!ranking) {
        ranking = [];
      }
      const player = {
        'name' : name,
        'result' : result.toString()
      };
      ranking.push(player);
      localStorage.setItem(this.localStorageKey, JSON.stringify(ranking));
    }
    alert(result + ' correct answers');
    this.getAll();
    location.reload();
  }

  getAll() {
    this.currentRanking = JSON.parse(localStorage['ranking']).sort(this.tri);
  }

  tri(a, b) {
  return b.result - a.result;
  }
}
