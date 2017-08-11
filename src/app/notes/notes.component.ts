import { Component } from '@angular/core';
import { Note } from './note.model';

@Component({
    selector: 'app-notes',
    template: `
        <app-note-form 
            (formSubmit)="addNote($event)">        
        </app-note-form>

        <app-note-list [notes]="notes"
            (noteDelete)="deleteNote($event)">
        </app-note-list>
    `
})
export class NotesComponent {
    notes: Note[] = [];

    addNote(note: string) {
        this.notes.push({ id: this.notes.length+1, body: note });
    }

    deleteNote(id) {
        this.notes = this.notes.filter( note => note.id !== id);
    }
}
