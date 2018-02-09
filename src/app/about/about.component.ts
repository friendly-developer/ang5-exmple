import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public goals = [];
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(x => console.log(x.id));

  }
  sendMeHome() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

}
