import { Component } from '@angular/core';
import { CharacterService } from './character.service';
import {Md5Service} from './md5.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CharacterService, Md5Service]
})

export class AppComponent {
  title = 'Angular API';
  heroes = this.characterService.getHeroes();
  constructor(private characterService: CharacterService) { }
}
