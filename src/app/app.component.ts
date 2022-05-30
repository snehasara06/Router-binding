import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Route-binding';
  about='Angular Interpolation';
  public giveMeRed="red";
  public giveMecolor="blue";
  disable=true;
  disable1=false;
  text1="MEAN: <b>Angular<b>";
  colortext="turquoise";
  name="Sneha";
  disable2=false;
  public successClass="success";
  public failClass="fail";
  public hasError=false;
  onClick(){
    alert("Hai Sneha!");
  }
  imgUrl="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg";
  getAbout(){
    return this.about;
  }
  min(a:number,b:number){
    return Math.min(a,b);
  
  }
}
