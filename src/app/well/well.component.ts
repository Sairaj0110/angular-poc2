import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  @Input() sourceKey: number;
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('hi', this.sourceKey)
  
  }

  onClick():void{
    this.notify.emit('message from child')
  }

}
