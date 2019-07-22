import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() resource:ResourceData;
  localURL:string;

  constructor() { }

  ngOnInit() {
  	this.localURL = "/browse/" + this.resource.category + "s/" + this.resource.id;
  }
}
