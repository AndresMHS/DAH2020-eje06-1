import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Andrés Haro Silva',
      controlnumber: '16400926',
      active: true
    });

    this.students.push({
      name: 'Graciela Pacheco Guardado',
      controlnumber: '16400123',
      active: true
    });

    this.students.push({
      name: 'Naruto Ramirez',
      controlnumber: '11400546',
      active: false
    });
  }

  getStudents(): Student[] {
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }
}
