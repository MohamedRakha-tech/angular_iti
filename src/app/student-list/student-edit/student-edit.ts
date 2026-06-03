import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IStudent } from '../../models/student';

@Component({
  selector: 'app-student-edit',
  imports: [FormsModule],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit {
  @Output() save = new EventEmitter<IStudent>();
  @Output() cancel = new EventEmitter<void>();

  private _student: IStudent | null = null;

  @Input()
  set student(value: IStudent | null) {
    this._student = value;
    this.draft = value ? { ...value } : this.getEmptyStudent();
  }

  get student(): IStudent | null {
    return this._student;
  }

  draft: IStudent = this.getEmptyStudent();

  submit(): void {
    if (!this.student) {
      return;
    }

    const student: IStudent = {
      id: Number(this.draft.id),
      name: this.draft.name.trim(),
      age: Number(this.draft.age),
    };

    if (!student.id || !student.name || !student.age) {
      return;
    }

    this.save.emit(student);
  }

  private getEmptyStudent(): IStudent {
    return {
      id: 0,
      name: '',
      age: 0,
    };
  }
}
