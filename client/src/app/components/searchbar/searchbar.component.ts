import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchString:string;
  @Input() searchCategory:string;

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
