import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistData } from 'src/app/data/playlist-data';
import { TrackData } from 'src/app/data/track-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlists-page',
  templateUrl: './playlists-page.component.html',
  styleUrls: ['./playlists-page.component.css']
})
export class PlaylistsPageComponent implements OnInit {
  playlistID:string;
	playlist:PlaylistData;
	tracks:TrackData[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.playlistID = this.route.snapshot.paramMap.get('id');
    var _this = this;

    this.spotifyService.getPlaylist(this.playlistID).then(function(response){
      _this.playlist = response;
    }); 

    this.spotifyService.getTracksForPlaylist(this.playlistID).then(function(response){
      _this.tracks = response;
    }); 
  }
}
