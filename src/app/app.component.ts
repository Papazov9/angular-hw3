import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddNoteComponent, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes-app';
}
