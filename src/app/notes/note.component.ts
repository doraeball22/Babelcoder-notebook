import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Note } from './note.model';

@Component({
    selector: 'app-note',
    template: `
        <li>{{ note.body }} 
            <button (click)="deleteNote()">Delete</button>
        </li>
    `
})
export class NoteComponent {
    @Input() note: Note;

    // สร้างชื่ออีเวนท์สำหรับส่งออก
    @Output() noteDelete: EventEmitter<number> = new EventEmitter();

    deleteNote() {

        // alert(this.note);

        this.noteDelete.emit(this.note.id);
        // ตอนแรกก็ไม่รู้ว่าจะส่ง event อะไรออกไป ก็เลยใช้ this.ชื่ออีเว้น.emit
        // Component มันจะไม่จัดการเอง มันจะส่งไปให้ Parent
    }
}