import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-note-list',
    template: `
        <ul>
            <app-note *ngFor="let note of notes"
                [note]="note">
            </app-note>
        </ul>    
    `
})
export class NoteListComponent {
    @Input() notes;
}