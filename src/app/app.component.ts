import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'basicNgApp';
  
  // data = {
  //   title: 'basicNgApp'
  // }

  // data = {
    // title: 'basicNgApp<h1>Attack</h1>'
    // title: '<h1>basicNgApp</h1>'
    // title: '<h1>basicNgApp</h1><script>alert("Attack")</script>'
  // }

  // onKeyup(newTitle: string) {
  //   this.data.title = newTitle;
  // }

}
