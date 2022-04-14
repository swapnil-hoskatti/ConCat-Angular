import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

  public page_title: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      const title = params.get('title');
      this.page_title = title;
      console.log(this.page_title);
    });

    console.log()

  }

}
