import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Note } from './note.model';

@Component({
    selector: 'app-note-list',
    template: `
        <ul>
            <app-note *ngFor="let note of notes"
                [note]="note"
                (noteDelete)="deleteNote($event)">
            </app-note>
        </ul>    
    `
})
export class NoteListComponent {
    @Input() notes: Note[];

    @Output() noteDelete: EventEmitter<number> = new EventEmitter();

    deleteNote(id) {
        this.noteDelete.emit(id);
    }
}