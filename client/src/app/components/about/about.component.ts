import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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