import { Component, OnInit, Input } from '@angular/core';
import { TrackData } from '../../data/track-data';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
	@Input() tracks:TrackData[];
	@Input() hideArtist:boolean = false;
	@Input() hideAlbum:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getTrackURL(i) : string {
    return "http://localhost:4200/track/" + this.tracks[i].id;
  }

  getAlbumURL(i) : string {
    return "http://localhost:4200/album/" + this.tracks[i].id;
  }

  getArtistURL(i) : string {
    return "http://localhost:4200/artist/" + this.tracks[i].artists[0].id;
  }

}
