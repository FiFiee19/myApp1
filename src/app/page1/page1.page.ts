import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  UserData= {
    textin:"",
    numin:"",
    pwdin:""
  };
  constructor(public myroute:Router) { }

  ngOnInit() {
  }
  gopage2() {
    this.myroute.navigate(['page2',{value:JSON.stringify(this.UserData)}]);
  }
}
