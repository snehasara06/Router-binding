import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {

  public name:string='';
  public stack:string='';
  public company:string='';



  constructor() { }

  ngOnInit(): void {
  }

}
