import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  constructor() { }
  title = 'Binding';
  ngOnInit(): void {
  }
  about='Angular Interpolation';
  public giveMeRed="red";
  public giveMecolor="blue";
  getAbout(){
    return this.about;
  }
  min(a:number,b:number){
    return Math.min(a,b);
  
  }
}
