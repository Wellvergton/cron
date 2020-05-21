import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  constructor() { this.increaseTime = this.increaseTime.bind(this); }

  @Input() id: number;
  @Input() title: string;
  @Input() time: { minutes: number, seconds: number };
  @Output() deleted = new EventEmitter<number>();
  timeIsRunning = false;
  interval: any;

  private increaseTime(): void {
    if (this.time.seconds === 59) {
      this.time.minutes++;
      this.time.seconds = 0;
    } else {
      this.time.seconds++;
    }
  }

  start(): void {
    this.interval = setInterval(this.increaseTime, 1000);
    this.timeIsRunning = true;
  }

  pause(): void {
    clearInterval(this.interval);
    this.timeIsRunning = false;
  }

  stop(): void {
    clearInterval(this.interval);
    this.timeIsRunning = false;
    this.time.minutes = 0;
    this.time.seconds = 0;
  }

  delete(): void {
    this.deleted.emit(this.id);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.stop();
  }

}
