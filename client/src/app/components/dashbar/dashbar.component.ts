import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashbar',
  templateUrl: './dashbar.component.html',
  styleUrls: ['./dashbar.component.css']
})
export class DashbarComponent implements OnInit {
  searchString:string;

  constructor(private route:ActivatedRoute,private router:Router) { }

  onKey(event: any) {
    this.searchString = event.target.value;
  }

  search() {
    this.router.navigate(['search/' + this.searchString], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
