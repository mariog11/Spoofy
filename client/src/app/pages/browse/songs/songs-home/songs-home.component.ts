import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ResourceData } from 'src/app/data/resource-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs-home',
  templateUrl: './songs-home.component.html',
  styleUrls: ['./songs-home.component.css']
})
export class SongsHomeComponent implements OnInit {
  searchString: string;
  tracks:ResourceData[];
  tracksAvailable:boolean;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.spotifyService.getUserTracks().then(function(response){
      _this.tracks=[];
      let response_data = JSON.parse(JSON.stringify(response));
      _this.tracksAvailable = (response_data.length > 0)  ? true : false;
      for (var i =  0; i < response_data.length; i++) {
        _this.tracks.push(response_data[i]);
      }
    });
  }
}
