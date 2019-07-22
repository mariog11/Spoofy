import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-dashbar',
  templateUrl: './dashbar.component.html',
  styleUrls: ['./dashbar.component.css']
})
export class DashbarComponent implements OnInit {
  infoLoaded:boolean;
  name:string;
  profile_pic:string;
  profile_link:string;

  constructor(private route:ActivatedRoute,private router:Router,private spotifyService: SpotifyService) { }

  ngOnInit() {
    var _this = this;
    this.spotifyService.aboutMe().then(function(response){
      let response_data = JSON.parse(JSON.stringify(response));
      _this.name = response_data.name;
      _this.profile_pic = response_data.imageURL;
      _this.profile_link = response_data.spotifyProfile;
      _this.infoLoaded = true;
    });
  }

}
