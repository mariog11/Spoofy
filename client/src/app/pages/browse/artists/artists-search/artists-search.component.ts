import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceData } from 'src/app/data/resource-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists-search',
  templateUrl: './artists-search.component.html',
  styleUrls: ['./artists-search.component.css']
})
export class ArtistsSearchComponent implements OnInit {
  searchString: string;
  artists:ResourceData[];
  artistsAvailable:boolean;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.route.params.subscribe(params => {
      _this.searchString = params.searchString;
      _this.spotifyService.searchFor("artist", this.searchString).then(function(response){
        _this.artists=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.artistsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.artists.push(response_data[i]);
        }
      });
    });
  }
}
