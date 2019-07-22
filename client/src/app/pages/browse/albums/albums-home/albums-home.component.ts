import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ResourceData } from 'src/app/data/resource-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-home',
  templateUrl: './albums-home.component.html',
  styleUrls: ['./albums-home.component.css']
})
export class AlbumsHomeComponent implements OnInit {
  searchString: string;
  albums:ResourceData[];
  albumsAvailable:boolean;

  constructor(private route:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    let _this = this;
    this.spotifyService.getUserAlbums().then(function(response){
        _this.albums=[];
        let response_data = JSON.parse(JSON.stringify(response));
        _this.albumsAvailable = (response_data.length > 0)  ? true : false;
        for (var i =  0; i < response_data.length; i++) {
          _this.albums.push(response_data[i]);
        }
    });
  }

}
