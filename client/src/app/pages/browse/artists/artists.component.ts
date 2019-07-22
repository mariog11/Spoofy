import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
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
