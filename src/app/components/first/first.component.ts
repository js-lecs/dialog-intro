import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public title:String = "THis is my First Component";
  public className:String = "bgBlue";
  public name:String = "";

 

  constructor() { }

  ngOnInit() {
  }

  changeColor(className){
    this.className = className ;
  }

}
