import { Component, OnInit } from '@angular/core';

type Timer = {
  id: number;
  title: string;
  time: { minutes: number, seconds: number };
};

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss']
})
export class TimerListComponent implements OnInit {

  constructor() { }

  timers: Array<Timer> = [
    { id: 1, title: `Timer 1`, time: { minutes: 0, seconds: 0 } }
  ];

  addTimer(): void {
    const times = this.timers.length + 1;
    for (let i = 1; i <= times; i++) {
      if (!this.timers.some((timer) => timer.title === `Timer ${i}`)) {
        this.timers.push(
          { id: i, title: `Timer ${i}`, time: { minutes: 0, seconds: 0 } }
        );
      }
    }
  }

  deleteTimer(timerId: number) {
    this.timers = this.timers.filter((timer) => timer.id !== timerId);
  }

  ngOnInit(): void {
  }

}
