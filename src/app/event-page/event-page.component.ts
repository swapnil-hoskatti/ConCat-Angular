import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import data from '../../assets/data/events.json';
import speakers from '../../assets/data/speakers.json';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

  public id: any;
  public page_data: any;
  public speaker_data: any;
  public date_duration: any;
  public to_date: any;
  public from_date: any;
  public time: any;
  public start_time: any;
  public end_time: any;
  // constructor(private router: Router) { };
  constructor(private route: ActivatedRoute,private router: Router) { };
  
  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      this.id = id;
    });

    if (this.id) {
    } else {
      this.router.navigate(['']);
    }

    this.page_data = data[data.findIndex((x: { id: any; }) => x.id == this.id)]
    this.speaker_data = speakers[data.findIndex((x: { id: any; }) => x.id == this.page_data.speaker_id)];
    this.to_date = new Date(this.page_data.to_date);
    this.from_date = new Date(this.page_data.from_date);
    this.date_duration = this.to_date.getDate() - this.from_date.getDate() + 1;
    this.start_time = this.page_data.from_time;
    this.end_time = this.page_data.to_time;
    let start_time_split = this.start_time.split(':');
    let end_time_split = this.end_time.split(':');
    let time_duration_mins = (end_time_split[0] - start_time_split[0]) * 60 + (end_time_split[1] - start_time_split[1]) + 30;
    let hrs = Math.floor(time_duration_mins / 60);
    let mins = time_duration_mins % 60;
    this.time = hrs + 'hrs ' + mins + 'mins';
    console.log(hrs, mins);
  }

}
