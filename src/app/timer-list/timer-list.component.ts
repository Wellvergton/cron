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

  saveTimersInLocalStorage(): void {
    localStorage.timers = JSON.stringify(this.timers);
  }

  addTimer(): void {
    const times = this.timers.length + 1;
    for (let i = 1; i <= times; i++) {
      if (!this.timers.some((timer) => timer.id === i)) {
        this.timers.push(
          { id: i, title: `Timer ${i}`, time: { minutes: 0, seconds: 0 } }
        );
      }
    }

    this.saveTimersInLocalStorage();
  }

  deleteTimer(timerId: number): void {
    this.timers = this.timers.filter((timer) => timer.id !== timerId);
    this.saveTimersInLocalStorage();
  }

  updateTimer(id: number, title: string): void {
    this.timers = this.timers.map((timer) => {
      if (timer.id === id) {
        timer.title = title;
      }

      return timer;
    });

    this.saveTimersInLocalStorage();
  }

  ngOnInit(): void {
    const storedTimers = JSON.parse(localStorage.timers);
    storedTimers.length > 0 ?
    this.timers = JSON.parse(localStorage.timers) :
    localStorage.timers = JSON.stringify(this.timers);
  }

}
