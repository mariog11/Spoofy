import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackData } from '../../../../data/track-data';
import { AlbumData } from '../../../../data/album-data';
import { SpotifyService } from '../../../../services/spotify.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id');
    var _this = this;

    this.spotifyService.getAlbum(this.albumId).then(function(response){
      _this.album = response;
    }); 

    this.spotifyService.getTracksForAlbum(this.albumId).then(function(response){
      _this.tracks = response;
    }); 
  }
}
