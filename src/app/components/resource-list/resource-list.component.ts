import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopListService } from 'src/app/services/laptop-list.service';
import { MobileListService } from 'src/app/services/mobile-list.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})

export class ResourceListComponent implements OnInit {
  resources: any;
  public show_table: boolean = false
  pageTitle= "Resources Management System";

  constructor(private getmobileservice: MobileListService,private getlaptopservice:LaptopListService, private router:Router) { }

  ngOnInit() {
    this.getmobileservice.getMobilelist()
    .subscribe(
      resources => {
        this.show_table = true;   
        this.resources = resources;
        console.log(this.resources);
      },
      err => console.log('http error',err),
      () => console.log('http req completed')
    );
  }
  OnClickmobile() {
    this.getmobileservice.getMobilelist()
    .subscribe(
      resources => {
        this.show_table = true;   
        this.resources = resources;
        console.log(this.resources);
      },
      err => console.log('http error',err),
      () => console.log('http req completed')
    );
  }
  OnClicklaptop() {
    this.getlaptopservice.getLaptoplist()
    .subscribe(
      resources => {
        this.show_table = true;     
        this.resources = resources;
        console.log(this.resources);
      },
      err => console.log('http error',err),
      () => console.log('http req completed')
    );
  }
  OnClickID(id: number) {
    this.router.navigate([`availability/${id}`]);
  }
}