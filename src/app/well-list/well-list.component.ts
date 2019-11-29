import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  showMessage = "test"
  wellsArray = [
    {
      name: "Sairaj",
      type: "male",
      sourcekey:123456789
    },
    {
      name: "Neha",
      type: "female",
      sourcekey:987654321
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  onNotifyClicked(message:string):void{
    this.showMessage = message
  }
}
