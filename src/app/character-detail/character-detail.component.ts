import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../character.service';
import {Character} from 'app/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
/**
 * Gather all heroes details before display using characterSerivce
 */
export class CharacterDetailComponent implements OnInit {

  private heroes: Character[];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getHeroes()
      .then((data) => {
        this.heroes = data;
      }).catch((err) => {
      console.log(err);
    });
  }
}
