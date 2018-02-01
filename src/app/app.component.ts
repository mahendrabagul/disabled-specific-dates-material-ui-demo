import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myDates: string[] = [new Date('Feb 06 2018 00:00:00 GMT+1100').toUTCString(), new Date('Feb 05 2018 00:00:00 GMT+1100').toUTCString()];
  myFilter = (d: Date): boolean => {
    return this.myDates.includes(d.toUTCString());
  }
  constructor() {
  }
}
