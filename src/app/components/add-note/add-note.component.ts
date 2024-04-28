import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../../models/models';
import { NotesService } from '../../services/notes.service';
import { catchError, tap, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent implements OnInit{
  notesForm!: FormGroup;
  editIndex : number | null = null;

  constructor(private formBuilder: FormBuilder, private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(7)]]
    });

    this.notesService.editNote$.subscribe(note => {
      this.notesForm.setValue({title: note.title, description: note.description});

      this.editIndex = note.id;
    });
  }

  saveNote() {
    const note: Note = {
      ...this.notesForm.value,
      id: 0
    }

    if (this.editIndex !== null) {
      this.notesService.updateNote(this.editIndex, note);
    } else {
      this.notesService.addNote(note);
    }

    this.notesForm.reset();

  }
}
