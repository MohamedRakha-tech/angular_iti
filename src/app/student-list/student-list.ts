import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IStudent } from '../models/student';
import { StudentService } from '../services/student.service';
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
  students: IStudent[] = [];

  selectedStudent: IStudent | null = null;

  editingStudent: IStudent | null = null;
  private editingStudentId: number | null = null;

  constructor(private readonly studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  addStudent(student: IStudent): void {
    this.studentService.addStudent(student);
    this.students = this.studentService.getStudents();
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

    this.studentService.updateStudent(this.editingStudentId, student);
    this.students = this.studentService.getStudents();
    this.editingStudent = null;
    this.editingStudentId = null;
    this.selectedStudent = student;
  }

  cancelEdit(): void {
    this.editingStudent = null;
    this.editingStudentId = null;
  }
}
