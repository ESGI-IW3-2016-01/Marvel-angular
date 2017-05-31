import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
