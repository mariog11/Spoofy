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

  //TODO: inject the Spotify service
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    //loadAbout();
    var image = this.spotifyService.aboutMe();
    console.log(image);
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  function loadAbout(): void{ 
    //var image = this.spotifyService.aboutMe().images.url;
    //console.log(image);


   /* <button (click)="loadAbout()"
    $('#loadButtonBaby').on("click", function() {
      var image = this.spotifyService.aboutMe().images.url;
      console.log(image);
    }*/

    //if(document.getElementById('liveButton').innerText == "Switch to live tweets") {
    //  document.getElementById('liveButton').innerText = "Switch to saved tweets";
    //  loadLiveRunkeeperTweets().then(parseTweets);
    //}
  }

}