import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  isCollapsed: Boolean;
  constructor() { }

  ngOnInit() {
    this.title = 'Angular Formation';
    this.isCollapsed = true;
  }

}
