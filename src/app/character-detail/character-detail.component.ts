import { Component, OnInit } from '@angular/core';
import {Character} from "../character";

const HEROES: Character[] = [
  { id: 11, name: 'Thor',
    description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.  He\'s self-assured, and he would never, ever stop fighting for a worthwhile cause.',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/portrait_incredible.jpg',
    comics: ["A+X (2012) #7",
      "Age of Heroes (2010) #1",
      "Alpha (2013) #4",
      "Alpha Flight (1983) #1"],
    series: ["A+X (2012 - Present)",
      "Age of Heroes (2010)",
      "Alpha (2013 - Present)",
      "Alpha Flight (1983 - 1994)"],
    stories: ["Interior #877",
      "Interior #879",
      "Interior #881",
      "Interior #883",
      "Interior #885",
      "Interior #887"] },
    { id: 12, name: '3-D Man',
        description: 'Man in 3D',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_incredible.jpg',
        comics: ["Avengers: The Initiative (2007) #14",
      "Avengers: The Initiative (2007) #15",
      "Avengers: The Initiative (2007) #16"],
        series: ["Avengers: The Initiative (2007 - 2010)",
      "Marvel Premiere (1972 - 1981)"],
        stories: ["Cover #19947",
      "The 3-D Man!",
      "The Devil's Music!",
      "Code-Name:  The Cold Warrior!"] },

];

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
