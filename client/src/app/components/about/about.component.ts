import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
   
  }

  loadAbout() {
    var _this = this;
    this.spotifyService.aboutMe().then(function(response){
      let response_data = JSON.parse(JSON.stringify(response));
      _this.name = response_data.name;
      _this.profile_pic = response_data.imageURL;
      _this.profile_link = response_data.spotifyProfile;
    });
  }
}