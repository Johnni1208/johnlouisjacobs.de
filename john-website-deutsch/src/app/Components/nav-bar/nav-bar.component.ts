import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.scss' ]
})
export class NavBarComponent implements OnInit {
  navbar_icon = [ 'fas fa-stream', 'fas fa-times' ];
  navbar_state = 0;
  active = false;

  constructor() { }

  ngOnInit() {
  }

  toggle_navbar() {
    this.toggle_navicon();
    if (this.active === false) {
      this.active = true;
    } else if (this.active === true) {
      this.active = false;
    }
  }

  private toggle_navicon() {
    if (this.navbar_state === 0) {
      this.navbar_state = 1;
    } else if (this.navbar_state === 1) {
      this.navbar_state = 0;
    }
  }

  close_navbar() {
    this.navbar_state = 0;
    this.active = false;
  }
}
