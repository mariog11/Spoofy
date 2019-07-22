import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() resource:ResourceData;
  localURL:string;

  constructor() { }

  ngOnInit() {
  	this.localURL = "/browse/" + this.resource.category + "s/" + this.resource.id;
  }
}
