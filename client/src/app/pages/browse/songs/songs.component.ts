import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  searchString:string;

  constructor(private route:ActivatedRoute,private router:Router) { }
  
  onKey(event: any) {
    this.searchString = event.target.value;
  }

  search() {
    this.router.navigate(['search/' + this.searchString], { relativeTo: this.route});
  }

  ngOnInit() {
  }

}
