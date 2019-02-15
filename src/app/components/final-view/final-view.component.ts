import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-view',
  templateUrl: './final-view.component.html',
  styleUrls: ['./final-view.component.css']
})
export class FinalViewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  OnLogout()
  {
    this.router.navigate(['']);
  }

}
