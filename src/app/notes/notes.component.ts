import { Component } from '@angular/core';

@Component({
    selector: 'app-notes',
    template: `
        <app-note-form 
            (formSubmit)="addNote($event)">        
        </app-note-form>
        <app-note-list [notes]="notes"></app-note-list>
    `
})
export class NotesComponent {
    notes = [];

    addNote(note) {
        this.notes.push(note);
    }
}
