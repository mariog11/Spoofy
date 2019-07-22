import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PlaylistData } from 'src/app/data/playlist-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  playlists: PlaylistData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.spotifyService.getFeaturedPlaylists().then(function(response){
      _this.playlists=[];
      let response_data = JSON.parse(JSON.stringify(response));
      for (var i =  0; i < response_data.length; i++) {
        _this.playlists.push(response_data[i]);
      }
    }); 
  }

}
