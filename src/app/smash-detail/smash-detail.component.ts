import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-smash-detail',
  templateUrl: './smash-detail.component.html',
  styleUrls: ['./smash-detail.component.css']
})
export class SmashDetailComponent implements OnInit {

  hero1 = this.characterService.getRandomHero();
  hero2 = this.characterService.getRandomHero();
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

}
