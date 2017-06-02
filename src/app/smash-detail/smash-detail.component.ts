import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../character.service';
import {Character} from '../character';

@Component({
  selector: 'app-smash-detail',
  templateUrl: './smash-detail.component.html',
  styleUrls: ['./smash-detail.component.css']
})
export class SmashDetailComponent implements OnInit {

  hero1: Character = new Character();
  hero2: Character = new Character();

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getRandomHero()
      .then((data) => {
          this.hero1 = data;
      })
      .catch((err) => {
      console.log(err);
      });
    this.characterService.getRandomHero()
      .then((data) => {
          this.hero2 = data;
      })
      .catch((err) => {
      console.log(err);
      });
  }

  clicked(heroId1, heroId2) {
    
    var localScoreHero1 = localStorage.getItem(heroId1); //Hero voté vainqueur
    var localScoreHero2 = localStorage.getItem(heroId2); //Hero perdant

    var scoreHero1 = parseInt(localScoreHero1, 10);
    var scoreHero2 = parseInt(localScoreHero2, 10);

    if(localScoreHero1!=null) {
      scoreHero1++;
    } else {
      var scoreHero1 = 1;
    }

    var stringResult = scoreHero1.toString();
    localStorage.setItem(heroId1,stringResult);

    var pourcentHero1 = (scoreHero1/(scoreHero1+scoreHero2))*100;
    var pourcentHero2 = (scoreHero2/(scoreHero1+scoreHero2))*100;

    if(isNaN(pourcentHero1) || isNaN(pourcentHero2)) {
      pourcentHero1 = 100;
      pourcentHero2 = 0;
    }


  }
}
