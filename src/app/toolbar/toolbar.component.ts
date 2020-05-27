import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  isLightTheme = false;
  body = document.querySelector('body');

  ngOnInit(): void {
    const storedThemePreference = JSON.parse(localStorage.isLightTheme);
    if (storedThemePreference === true) {
      this.toggleTheme();
      this.isLightTheme = storedThemePreference;
    }
  }

  toggleTheme(): void {
    this.body.classList.toggle('cron-dark-theme');
    setTimeout(() => localStorage.isLightTheme = this.isLightTheme, 0);
  }

}
