import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data = [
    {
      title: 'Angular',
      description: 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      committee: 'CODEX',
      img: 'assets/img/CodeX_logo.jpg'
    },
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces. React can be used as a base in the development of single page or mobile applications.',
      committee: 'IEEE',
      img: 'assets/img/IEEE_logo.jpg'
    },
    {
      title: 'Vue',
      description: 'A progressive Javascript framework for building user interfaces. Vue can be used as a base in the development of single page or mobile applications.',
      committee: 'CODEX',
      img: 'assets/img/CodeX_logo.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
