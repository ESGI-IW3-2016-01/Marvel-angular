import {Component, OnInit} from '@angular/core';
import {CharacterService} from '../character.service';
import {MdCardModule, MdButtonModule} from '@angular/material';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  heroes = this.characterService.getHeroes();
  constructor(private characterService: CharacterService) {}
  ngOnInit() {}
}
