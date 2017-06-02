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

  // Validate answer
  clicked() {
    let result = 0;

    // Get all answer
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

    if (!name) {
      alert('Pseudo is empty');
      return false;
    }

    let ranking = JSON.parse(localStorage.getItem(this.localStorageKey));
    if (!ranking) {
      ranking = [];
    }

    // Add player with a name and a result
    const player = {
      'name' : name,
      'result' : result.toString()
    };
    ranking.push(player);
    localStorage.setItem(this.localStorageKey, JSON.stringify(ranking));

    alert(result + ' correct answers');
    this.getAll();
    location.reload();
  }

  // get ranking
  getAll() {
    this.currentRanking = JSON.parse(localStorage['ranking']).sort(this.tri);
  }

  // Tri by result
  tri(a, b) {
  return b.result - a.result;
  }
}
