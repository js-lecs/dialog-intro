import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  // init to tab1 at component load
  public activeTab = "tab1";

  constructor() { }

  ngOnInit() {
  }

  changeTab(tabName){
    this.activeTab = tabName;
  }
}
