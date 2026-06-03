import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IStudent } from '../../models/student';

@Component({
  selector: 'app-student-add',
  imports: [FormsModule],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
  @Output() addStudent = new EventEmitter<IStudent>();

  newStudent: IStudent = this.getEmptyStudent();

  submit(): void {
    const student: IStudent = {
      id: Number(this.newStudent.id),
      name: this.newStudent.name.trim(),
      age: Number(this.newStudent.age),
    };

    if (!student.id || !student.name || !student.age) {
      return;
    }

    this.addStudent.emit(student);
    this.newStudent = this.getEmptyStudent();
  }

  private getEmptyStudent(): IStudent {
    return {
      id: 0,
      name: '',
      age: 0,
    };
  }
}
