import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myDates: Date[] = [new Date('Feb 06 2018 00:00:00 GMT+1100 '), new Date('Feb 05 2018 00:00:00 GMT+1100 ')];
  myFilter = (d: Date): boolean => {
    for (var i = 0; i <= this.myDates.length; i++) {
      console.log(this.myDates.length);
      console.log('Array Value=' + this.myDates[i].toLocaleDateString());
      console.log('Current Value=' + d.toLocaleDateString());
      console.log('Result=' + (d.toLocaleDateString() === this.myDates[i].toLocaleDateString()));
      return d.toLocaleDateString() === this.myDates[i].toLocaleDateString();
    }
  }
  constructor() {
  }
}
