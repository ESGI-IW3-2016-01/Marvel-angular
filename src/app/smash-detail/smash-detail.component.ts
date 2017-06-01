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
}
