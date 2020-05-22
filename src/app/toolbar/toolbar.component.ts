import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  isDark = true;
  body = document.querySelector('body');

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.body.classList.toggle('cron-dark-theme');
  }

}
