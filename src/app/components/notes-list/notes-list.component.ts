import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/models';
import { NoteCardComponent } from '../note-card/note-card.component';
import { CommonModule } from '@angular/common';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit{
  notes!: Note[];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = [];
    this.notesService.notes$.subscribe( notesRec => {
      this.notes = notesRec;
    });
  }

  onRemove(index: number) {
    this.notesService.removeNote(index);
  }

  onEdit(note: Note) {
    this.notesService.beginEdit(note);
  }
}
