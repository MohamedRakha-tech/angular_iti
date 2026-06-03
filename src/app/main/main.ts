import { Component } from '@angular/core';

import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-main',
  imports: [StudentList],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
