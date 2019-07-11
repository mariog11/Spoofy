import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchString: string;
  tracks:ResourceData[];
  artists:ResourceData[];
  albums:ResourceData[];
  tracksAvailable:boolean;
  artistsAvailable:boolean;
  albumsAvailable:boolean;

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
      _this.spotifyService.searchFor("album", this.searchString).then(function(response){
        _this.albums=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.artistsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.albums.push(response_data[i]);
        }
      }); 
      _this.spotifyService.searchFor("artist", this.searchString).then(function(response){
        _this.artists=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.albumsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.artists.push(response_data[i]);
        }
      });  
    });
  }

}
