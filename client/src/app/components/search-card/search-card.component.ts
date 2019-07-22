import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  @Input() resource:ResourceData;
  localURL:string;

  constructor() { }

  ngOnInit() {
  	this.localURL = "/browse/" + this.resource.category + "s/" + this.resource.id;
  }
}
