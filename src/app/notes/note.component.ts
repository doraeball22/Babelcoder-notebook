import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-note',
    template: `
        <li>{{ note }}</li>
    `
})
export class NoteComponent {
    @Input() note;
}