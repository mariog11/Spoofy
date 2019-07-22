import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PlaylistData } from 'src/app/data/playlist-data';

@Component({
  selector: 'app-playlists-home',
  templateUrl: './playlists-home.component.html',
  styleUrls: ['./playlists-home.component.css']
})
export class PlaylistsHomeComponent implements OnInit {
  playlists: PlaylistData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.spotifyService.getUserPlaylists().then(function(response){
      _this.playlists=[];
      let response_data = JSON.parse(JSON.stringify(response));
      for (var i =  0; i < response_data.length; i++) {
        _this.playlists.push(response_data[i]);
      }    });
  }

}
