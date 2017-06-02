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
    /*
      Set random hero to template
     */
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

  clicked(heroId1, heroId2, position) {
    /*
       Update the rank of hero selected and display their percent
     */
    
    var localScoreHero1 = localStorage.getItem(heroId1); //Score hero voté vainqueur
    var localScoreHero2 = localStorage.getItem(heroId2); //Score hero perdant

    var scoreHero1 = parseInt(localScoreHero1, 10);
    var scoreHero2 = parseInt(localScoreHero2, 10);

    if(localScoreHero1!=null) {
      // Increment the score of hero selected
      scoreHero1++;
    } else {
      // Set score to 1 if not exist
      var scoreHero1 = 1;
    }

    // Cast to string for set the value in localStorage
    var stringResult = scoreHero1.toString();
    localStorage.setItem(heroId1,stringResult);

    // Calcul percent of the heroes
    var pourcentHero1 = (scoreHero1/(scoreHero1+scoreHero2))*100;
    var pourcentHero2 = (scoreHero2/(scoreHero1+scoreHero2))*100;

    if(isNaN(pourcentHero1) || isNaN(pourcentHero2)) {
      pourcentHero1 = 100;
      pourcentHero2 = 0;
    }

    // Change opcacity to display percentage
    document.getElementById("image1").style.opacity = "0.3";
    document.getElementById("image2").style.opacity = "0.3";

    if (position == 1) { //If is the hero 1 that was selected
      document.getElementById("pourcentText1").innerHTML = pourcentHero1.toFixed(0) + "%";
      document.getElementById("pourcentText2").innerHTML = pourcentHero2.toFixed(0) + "%";
    } else { //If is the hero 2 that was selected
      document.getElementById("pourcentText2").innerHTML = pourcentHero1.toFixed(0) + "%";
      document.getElementById("pourcentText1").innerHTML = pourcentHero2.toFixed(0) + "%";
    }

    //Disable the button
    document.getElementById("button1").setAttribute('disabled', 'disabled');
    document.getElementById("button2").setAttribute('disabled', 'disabled');

    // Reload the page 2,5 seconds after clicking
    setTimeout(function(){
      location.reload();
    }, 2500);
  }
}
