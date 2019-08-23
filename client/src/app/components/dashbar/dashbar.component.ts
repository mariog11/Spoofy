import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

}
