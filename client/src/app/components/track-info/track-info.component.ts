import { Component, OnInit, Input } from '@angular/core';
import { TrackData } from 'src/app/data/track-data';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.css']
})
export class TrackInfoComponent implements OnInit {
  @Input() track:TrackData;

  constructor() { }

  ngOnInit() {  }

}
