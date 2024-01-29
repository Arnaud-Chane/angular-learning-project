import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  standalone: true,
  imports: [],
  templateUrl: './name-display.component.html',
  styleUrl: './name-display.component.css'
})

export class NameDisplayComponent implements OnInit {
  name: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  updateName(value: string): void {
    this.name = value;
  }
}