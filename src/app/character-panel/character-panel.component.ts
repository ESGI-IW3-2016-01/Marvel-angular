import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-panel',
  template: `
    <router-outlet></router-outlet>
  `
})
export class CharacterPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
