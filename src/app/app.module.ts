import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note.component';
import { NoteListComponent } from './notes/note-list.component';
import { NoteFormComponent } from './notes/note-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    NoteListComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
