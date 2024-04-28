import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Note } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private _notes = new BehaviorSubject<Note[]>([]);
  private _editNote = new Subject<Note>();

  public notes$: Observable<Note[]> = this._notes.asObservable();
  public editNote$: Observable<Note> = this._editNote.asObservable();

  constructor() { }

  addNote(note: Note) {
    const currentNotes = this._notes.getValue();
    note.id = currentNotes.length;
    this._notes.next([...currentNotes, note]);
  }

  beginEdit(note: Note) {
    this._editNote.next(note);
  }

  removeNote(index: number) {
    let notes = this._notes.getValue();
    notes = notes.splice(1, 1);
    this._notes.next(notes);
  }

  updateNote(index: number, note: Note) {
    let notes = this._notes.getValue();
    notes[index] = note;
    this._notes.next(notes);
  }
}
