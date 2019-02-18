import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopListService } from 'src/app/services/laptop-list.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  public show_table: boolean = false;
  Laptop_list_resource: any;
  pageTitle = "Resources Management System";

  constructor(private getlaptopservice: LaptopListService, private router: Router) { }

  ngOnInit() {
    this.getlaptopservice.getLaptoplist()
    .subscribe(
      Laptop_list_resource => {
        this.show_table = true;     
        this.Laptop_list_resource = Laptop_list_resource;
      },
      error => {}
    );
  }
  OnClickLaptop() {
    this.getlaptopservice.getLaptoplist()
    .subscribe(
      Laptop_list_resource => {
        this.show_table = true;     
        this.Laptop_list_resource = Laptop_list_resource;
      },
      error => {}
    );
  }
  OnClickMobile() {
    this.router.navigate(["/mobilelist"]);
  }
  OnClickID(id: number) {
    this.router.navigate([`availability/${id}`]);
  }

}
