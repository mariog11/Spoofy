import { Component, OnInit } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlists-search',
  templateUrl: './playlists-search.component.html',
  styleUrls: ['./playlists-search.component.css']
})
export class PlaylistsSearchComponent implements OnInit {
  searchString: string;
  playlists:ResourceData[];
  playlistsAvailable:boolean;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.route.params.subscribe(params => {
      _this.searchString = params.searchString;
      _this.spotifyService.searchFor("playlist", this.searchString).then(function(response){
        _this.playlists=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.playlistsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.playlists.push(response_data[i]);
        }
      });
    });
  }
}
