/**
 * Marvel Character Class
 * thumbnail is a link to portrait (.jpg)
 * Comics, Series and Stories are a collection of strings
 */
export class Character {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  comics: string[];
  series: string[];
  stories: string[];

  constructor() {}
}
