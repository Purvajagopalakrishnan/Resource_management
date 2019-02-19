import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileListService } from 'src/app/services/mobile-list.service';

@Component({
  selector: 'app-Mobile-list',
  templateUrl: './Mobile-list.component.html',
  styleUrls: ['./Mobile-list.component.css']
})

export class MobileListComponent implements OnInit {
  Mobile_list_resource: any;
  public show_table: boolean = false;
  pageTitle = "Resources Management System";

  constructor(private getmobileservice: MobileListService, private router: Router) { }

  ngOnInit() {
    this.getmobileservice.getMobilelist()
    .subscribe(
      Mobile_list_resource => {
        this.show_table = true;   
        this.Mobile_list_resource = Mobile_list_resource;
      },
     error => {}
    );
  }
   OnClickMobile() {
    this.getmobileservice.getMobilelist()
    .subscribe(
      Mobile_list_resource => {
      this.show_table = true;   
       this.Mobile_list_resource = Mobile_list_resource;
      },
       error => {}
    );
  }
  OnClickLaptop() {
    this.router.navigate(["/laptoplist"]);
  }
  OnClickID(id: number) {
    this.router.navigate([`availability/${id}`]);
  }
}