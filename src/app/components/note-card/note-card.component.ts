import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css'
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() edit = new EventEmitter<Note>();
  @Output() remove = new EventEmitter<void>();

  isSelected: boolean = false;

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }

  editNote() {
    this.edit.emit(this.note);
  }

  removeNote() {
    this.remove.emit();
  }
}
