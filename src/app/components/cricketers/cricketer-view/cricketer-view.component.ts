import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cricketer-view',
  templateUrl: './cricketer-view.component.html',
  styleUrls: ['./cricketer-view.component.scss']
})
export class CricketerViewComponent implements OnInit {

  @Input() public cricketer = {};

  @Output() nameEmitter: EventEmitter<any> = new EventEmitter();

  public newName = "";
  constructor() { }

  ngOnInit() {
  }

  emitNameToParent() {
    this.nameEmitter.emit(this.newName);
  }

  public getNewName(){
    return this.newName;
  }
}
