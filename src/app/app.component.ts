import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coreCourse = COURSES[0];
  ngrxCourse = COURSES[1];
  rxjsCourse = COURSES[2];

  // Event bubbling captured
  onCardClicked() {
    console.log("App component - click event bubbled...");
  }

  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled...", course);
  }
}
