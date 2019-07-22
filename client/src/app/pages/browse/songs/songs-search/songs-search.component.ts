import { Component, OnInit } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-songs-search',
  templateUrl: './songs-search.component.html',
  styleUrls: ['./songs-search.component.css']
})
export class SongsSearchComponent implements OnInit {
  searchString: string;
  tracks:ResourceData[];
  tracksAvailable:boolean;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.route.params.subscribe(params => {
      _this.searchString = params .searchString;
      _this.spotifyService.searchFor("track", this.searchString).then(function(response){
        _this.tracks=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.tracksAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.tracks.push(response_data[i]);
        }
      });
    });
  }
}
