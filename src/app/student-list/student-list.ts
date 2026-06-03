import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IStudent } from '../models/student';
import { StudentAdd } from './student-add/student-add';
import { StudentDetails } from './student-details/student-details';
import { StudentEdit } from './student-edit/student-edit';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, StudentAdd, StudentDetails, StudentEdit],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: IStudent[] = [
    { id: 1, name: 'Ahmed', age: 20 },
    { id: 2, name: 'Sara', age: 22 },
  ];

  selectedStudent: IStudent | null = null;

  editingStudent: IStudent | null = null;
  private editingStudentId: number | null = null;

  addStudent(student: IStudent): void {
    this.students = [...this.students, student];
  }

  showDetails(student: IStudent): void {
    this.selectedStudent = student;
  }

  startEdit(student: IStudent): void {
    // this.editingStudentId = student.id;
    this.editingStudentId = student.id;
    this.editingStudent = { ...student };
    this.selectedStudent = student;
  }

  saveStudent(student: IStudent): void {
    if (this.editingStudentId === null) {
      return;
    }

    this.students = this.students.map((currentStudent) =>
      currentStudent.id === this.editingStudentId ? student : currentStudent,
    );
    this.editingStudent = null;
    this.editingStudentId = null;
    this.selectedStudent = student;
  }

  cancelEdit(): void {
    this.editingStudent = null;
    this.editingStudentId = null;
  }
}
