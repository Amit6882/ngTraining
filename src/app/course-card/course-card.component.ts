import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course'

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  
  // @Output()
  // courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('Card component - button clicked...');

    // this.courseSelected.emit(this.course);

    // rename eventEmitter from courseSelected to courseEmitter
    this.courseEmitter.emit(this.course);
  }

}
