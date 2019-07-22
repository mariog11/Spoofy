import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string;
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  isTrack:boolean;
  isAlbumOrArtist:boolean;

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.loadCategories();
  }

  onKey(event: any) {
    this.searchString = event.target.value;
  }

  updateCategory(event: any){
    this.searchCategory = event.target.value;
  }

  loadCategories(){
    var st=document.getElementById("Drop");
    var choose = document.createElement('option');
    choose.value = '';
    choose.innerHTML = 'Choose Category';
    st.appendChild(choose);
    for (var i = 1; i < this.searchCategories.length + 1; i++) {
      var opt = document.createElement('option');
      opt.value = this.searchCategories[i - 1];
      opt.innerHTML = this.searchCategories[i - 1];
      st.appendChild(opt);
    }
  }

  search() {
    var _this = this;
    this.spotifyService.searchFor(this.searchCategory, this.searchString).then(function(response){
      _this.resources=[];
      let response_data = JSON.parse(JSON.stringify(response));
      for (var i =  0; i < response_data.length; i++) {
        _this.resources.push(response_data[i]);
      }
      _this.isTrack = (_this.searchCategory == 'track') ? true : false;
      _this.isAlbumOrArtist = (_this.searchCategory == 'album' || _this.searchCategory == 'artist') ? true : false;
      console.log(_this.resources);

    }); 

  }
}
