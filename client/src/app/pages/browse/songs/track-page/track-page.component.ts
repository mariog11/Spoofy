import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../../../data/artist-data';
import { TrackData } from '../../../../data/track-data';
import { AlbumData } from '../../../../data/album-data';
import { TrackFeatures } from '../../../../data/track-features';
import { SpotifyService } from '../../../../services/spotify.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  audioFeatures:TrackFeatures;
  featureTypes = TrackFeatures.FeatureTypes;

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id');
    var _this = this;
    this.spotifyService.getTrack(this.trackId).then(function(response){
      _this.track = response;
    }); 
    this.spotifyService.getAudioFeaturesForTrack(this.trackId).then(function(response){
      _this.audioFeatures = response;
    }); 
  }

}
