import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  itemCount: Number;
  btnText = 'Add Item';
  goalText = 'My First Life Goal';
  goals: Array<string> = [];
  constructor() { }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
  ngOnInit() {
    this.itemCount = this.goals.length;
  }

}
