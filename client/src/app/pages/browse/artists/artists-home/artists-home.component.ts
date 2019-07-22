import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ResourceData } from 'src/app/data/resource-data';

@Component({
  selector: 'app-artists-home',
  templateUrl: './artists-home.component.html',
  styleUrls: ['./artists-home.component.css']
})
export class ArtistsHomeComponent implements OnInit {
  artists:ResourceData[];
  artistsAvailable:boolean;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.spotifyService.getUserArtists().then(function(response){
      _this.artists=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.artistsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.artists.push(response_data[i]);
        }
    });
  }

}
