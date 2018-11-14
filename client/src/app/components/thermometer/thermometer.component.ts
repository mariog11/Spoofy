import { Component, OnInit, Input}  from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() featureDecimal:number;
  @Input() featureType:string;
  @Input() featureColor:string;

  constructor() { }

  ngOnInit() {
  }

}
