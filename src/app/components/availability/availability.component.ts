import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AvailabilityService } from 'src/app/services/availability.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BookingResourceService } from 'src/app/services/booking-resource.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  pageTitle= 'Resource Management System';
  AvailabilityForm: FormGroup;
  BookingForm: FormGroup;
  submitted = false;
  id:number;
  bookingdetails: any;
  public show_form: boolean = false

  get form() {
    return this.AvailabilityForm.controls;
  }
  get bookform(){
    return this.BookingForm.controls;
  }

  constructor(public formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private availabilityservice:AvailabilityService,private localstorage:LocalStorageService,private bookresourceservice:BookingResourceService) { }
  ngOnInit() {
    this.AvailabilityForm = this.formBuilder.group({
    Startdate: ['', Validators.required],
    Enddate:   ['',Validators.required]
    });
    this.route.params.subscribe(params => {
    this.id = params['id']
    })
  }
  OnCheckAvailability() {
    this.submitted = true;
    if(this.AvailabilityForm.invalid){
      return;
    }
    var resource_id= this.id
    this.availabilityservice.CheckAvailability(this.form.Startdate.value,this.form.Enddate.value,resource_id)
    .subscribe(
      data => {
        console.log(data);
        if(data==false)
        {
          this.show_form = true;
          this.BookingForm = this.formBuilder.group({
            Startdate: ['',Validators.required],
            Enddate:   ['',Validators.required]
          });
        }
        else{
          alert("The requested device is not available on the specified date");
        }
      },
      error => {
        console.log(error);
        
      }
    );
  }
  OnClickBook() {
    var lstorage=this.localstorage.RetrieveItem("Email_id");
    var res_id=this.id
    this.bookresourceservice.BookResource(this.bookform.Startdate.value,this.bookform.Enddate.value,res_id,lstorage)
    .subscribe(
      bookingdetails => {
        this.bookingdetails = bookingdetails;
        console.log(this.bookingdetails);
        this.router.navigate(["/completion"])
      },
      error => console.log('http error',error),
    );
  }
}
