import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Md5Service} from './md5.service';
import {Character} from './character';
import 'rxjs/Rx';

@Injectable()
export class CharacterService {

  private heroesUrl = 'http://gateway.marvel.com/v1/public/characters';
  private publicKey = 'ab8f5af2b5d4edfb5f910acdc0aa9d88';
  private privateKey = 'c7cac7d08f7eabc331c63c215a2fa5e240943a20';
  private timestamp = Date.now();

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroes(limit: number = 9, offset: number = 0): Promise<Character[]> {

    offset = Math.random() * (1475 - 1) + 1;

    const url = this.heroesUrl +
      '?ts=' + this.timestamp +
      '&apikey=' + this.publicKey +
      '&hash=' + this.getHash() +
      '&limit=' + limit +
      '&offset=' + offset;

    return this.http.get(url)
      .toPromise()
      .then((response) => {
        return response.json().data.results.map((value) => {
          const char = new Character();
          char.id = value.id;
          char.name = value.name;
          char.description = value.description;
          char.thumbnail = value.thumbnail.path + '/portrait_incredible' + '.' + value.thumbnail.extension;
          return char;
        });
      })
      .catch(CharacterService.handleError);
  }

    getRandomHero(limit: number = 1, offset: number = 0): Promise<Character[]> {
    
        offset = Math.random() * (1485 - 1) + 1;
    
        const url = this.heroesUrl +
            '?ts=' + this.timestamp +
            '&apikey=' + this.publicKey +
            '&hash=' + this.getHash() +
            '&limit=' + limit +
            '&offset=' + offset;
    
        return this.http.get(url)
            .toPromise()
            .then((response) => {
                return response.json().data.results.map((value) => {
                    const char = new Character();
                    char.id = value.id;
                    char.name = value.name;
                    char.description = value.description;
                    char.thumbnail = value.thumbnail.path + '/portrait_incredible' + '.' + value.thumbnail.extension;
                    return char;
                });
            })
            .catch(CharacterService.handleError);
    }

  getHeroById(id: string) {
    const url = this.heroesUrl + '/' +
      id +
      '?hash=' + this.getHash() +
      '&apikey=' + this.publicKey +
      '&ts=' + this.timestamp;
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        const value = response.json().data.results.shift();
        const char = new Character();
        char.id = value.id;
        char.name = value.name;
        char.description = value.description;
        char.thumbnail = value.thumbnail.path + '/portrait_incredible' + '.' + value.thumbnail.extension;
        return char;
      })
      .catch(CharacterService.handleError);
  }

  constructor(private http: Http, private md5Service: Md5Service) {
  }

  private getHash() {
    return this.md5Service.md5(this.timestamp + this.privateKey + this.publicKey);
  }
}
