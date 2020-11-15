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

  cardClass() {
    if(this.course.category === 'BEGINNER') {
      // return ['begineer']
      return 'begineer';
    }
  }

  cardStyles() {
    return {'text-decoration': 'underline'}
    // return {
    //   'background-image': 'url('+ this.course.iconUrl +')'
    // }
  }

}
