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
  
  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('Card component - button clicked...');
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl; 
  }

  /* only defined here class which are conditionally applied
  // add or removed style to template depending on the content of data
  it is not meant to replace the css class property which is constant and is always associated to the html content.
  */
  cardClass() {
    // return {
    //   'begineer': true, 
    //   'course-card': true
    // }
    
    
    // return {
    //   'begineer': this.course.category === 'BEGINNER'
    // }

    if(this.course.category === 'BEGINNER') {
      // return ['begineer']
      return 'begineer';
    }
  }

}
