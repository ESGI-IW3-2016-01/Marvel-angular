import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharacterService} from '../character.service';
import {Character} from '../character';

@Component({
  selector: 'app-character-info-component',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  @Input() character: Character = new Character();

  constructor(private route: ActivatedRoute,
              private service: CharacterService) {}

  ngOnInit() {
    this.service.getHeroById(this.id)
      .then((data) => {
        this.character = data;
      }).catch((err) => {
      console.log(err);
    });
  }
}
