import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/events.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data = data;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
