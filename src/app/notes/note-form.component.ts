// Output Decorator การส่งค่าไปให้ component ตัวบน
// ต้อง Import EventEmitter and Output
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-note-form',
    template: `
        <form>
            <input type="text" name="note" [(ngModel)]="note"/>
            <button type='submit' (click)="addNote($event)">Add</button>
        <form>    
    `
})
export class NoteFormComponent {
    @Output() formSubmit: EventEmitter<string> = new EventEmitter();
    note = "";

    addNote(event: MouseEvent) {
        event.preventDefault();
        // alert(this.note);
        this.formSubmit.emit(this.note);
        this.note = "";
    }
}

// 3. Using ngModel (recommended)
// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-note-form',
//     template: `
//         <form>
//             <input type="text" name="note" [(ngModel)]="note"/>
//             <button type='submit' (click)="addNote($event)">Add</button>
//         <form>    
//     `
// })
// export class NoteFormComponent {
//     note = "";

//     addNote(event) {
//         event.preventDefault();
//         alert(this.note);
//         this.note = "";
//     }
// }

// 2.Property Binding
// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-note-form',
//     template: `
//         <form>
//             <input type="text" [value]="note"
//             (input)="note=$event.target.value"
//             />
//             <button type='submit' (click)="addNote($event)">Add</button>
//         <form>    
//     `
// })
// export class NoteFormComponent {
//     note = "";

//     addNote(event) {
//         event.preventDefault();
//         alert(this.note);
//         this.note = "";
//     }
// }

// 1.Viewchild การรับค่าจากฟอร์มมี 3 วิธี
// import { Component, ViewChild } from '@angular/core';

// @Component({
//     selector: 'app-note-form',
//     template: `
//         <form>
//             <input type="text" #note/>
//             <button type='submit' (click)="addNote($event)">Add</button>
//         <form>    
//     `
// })
// export class NoteFormComponent {
//     @ViewChild('note') note;

//     addNote(event) {
//         event.preventDefault();
//         alert(this.note.nativeElement.value);
//     }
// }

// () Action up (event)
// [] Data down ใช้ Property Binding