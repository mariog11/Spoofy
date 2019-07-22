import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../../../data/artist-data';
import { TrackData } from '../../../../data/track-data';
import { AlbumData } from '../../../../data/album-data';
import { SpotifyService } from '../../../../services/spotify.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.route.params.subscribe(params => {
      this.artistId = this.route.snapshot.paramMap.get('id');
      var _this = this;

      this.spotifyService.getArtist(this.artistId).then(function(response){
        _this.artist = response;
      }); 

      this.spotifyService.getTopTracksForArtist(this.artistId).then(function(response){
        _this.topTracks = response;
      }); 

      this.spotifyService.getAlbumsForArtist(this.artistId).then(function(response){
        _this.albums = response;
      }); 

      this.spotifyService.getRelatedArtists(this.artistId).then(function(response){
        _this.relatedArtists = response;
      });
    });
  }

}