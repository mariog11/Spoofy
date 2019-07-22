import { Component, OnInit } from '@angular/core';
import { ResourceData } from 'src/app/data/resource-data';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-albums-search',
  templateUrl: './albums-search.component.html',
  styleUrls: ['./albums-search.component.css']
})
export class AlbumsSearchComponent implements OnInit {
  searchString: string;
  albums:ResourceData[];
  albumsAvailable:boolean;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.route.params.subscribe(params => {
      _this.searchString = params.searchString;
      _this.spotifyService.searchFor("album", this.searchString).then(function(response){
        _this.albums=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.albumsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.albums.push(response_data[i]);
        }
      });
    });
  }

}
