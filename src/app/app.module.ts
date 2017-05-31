import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCheckboxModule} from '@angular/material';

import { RouterModule } from '@angular/router';
import { TriviaDetailComponent } from './trivia-detail/trivia-detail.component';
import { SmashDetailComponent } from './smash-detail/smash-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    TriviaDetailComponent,
    SmashDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCheckboxModule,
    RouterModule.forRoot([
      {
        path: 'character',
        component: CharacterDetailComponent
      },
      {
        path: 'trivia',
        component: TriviaDetailComponent
      },
      {
        path: 'smash',
        component: SmashDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
