import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;
  localURL:string;

  constructor() { }

  ngOnInit() {
  	this.localURL = "/browse/" + this.resource.category + "/" + this.resource.id;
  }

}
