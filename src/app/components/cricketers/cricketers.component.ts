import { Component, OnInit } from '@angular/core';

interface Cricketer{
  name:String;
  number:Number;
  type:String;
}
@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent implements OnInit {

  public cricketers:Array<Cricketer> = [
    {
      name: "Sanath Jayasuriya",
      number: 7,
      type: "allrounder"
    },
    {
      name: "Kumar Sangakkara",
      number: 11,
      type: "batsman"
    },
    {
      name: "Mahela Jayawardane",
      number: 27,
      type: "batsman"
    }
  ];

  public activeCricketer:Cricketer = <Cricketer>{};
  public selectedCricketerIndex = -1;
  constructor() { }

  ngOnInit() {
  }

  selectCricketer(cricketerObj:Cricketer, index) {
    this.activeCricketer = cricketerObj;
    this.selectedCricketerIndex = index;
  }

  catchNameEmit(newName){
    // alert(newName);
    this.cricketers[this.selectedCricketerIndex].name = newName;
    // assign the new name to the relevent cricketer object in the array
  }
}
