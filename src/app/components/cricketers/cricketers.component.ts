import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricketers',
  templateUrl: './cricketers.component.html',
  styleUrls: ['./cricketers.component.scss']
})
export class CricketersComponent implements OnInit {

  public cricketers = [
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

  public activeCricketer = {};
  constructor() { }

  ngOnInit() {
  }

  selectCricketer(cricketerObj) {
    this.activeCricketer = cricketerObj;
  }
}
