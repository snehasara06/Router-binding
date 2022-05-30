import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  disable=true;
  disable1=false;
  name="Sneha";
  disable2=false;
  imgUrl="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg";
  text1="MEAN: <b>Angular<b>";
}
