import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { BookingResourceService } from 'src/app/services/booking-resource.service';
import { CheckAvailabilityService } from 'src/app/services/check-availability.service';
import { BookResource } from 'src/app/Class&Interface/book-resource';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {
  pageTitle = 'Resource Management System';
  AvailabilityForm: FormGroup;
  BookingForm: FormGroup;
  submitted = false;
  Route_parameter_id: number;
  bookingdetails: any;
  public show_form: boolean = false;

  get Availabilityform() {
    return this.AvailabilityForm.controls;
  }
  get bookform() {
    return this.BookingForm.controls;
  }

  constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private availabilityservice: CheckAvailabilityService, private localstorage: LocalStorageService, private bookresourceservice: BookingResourceService) { }
  ngOnInit() {
    this.AvailabilityForm = this.formBuilder.group ({
      Startdate: ['', Validators.required],
      Enddate: ['',Validators.required]
    });
    this.route.params.subscribe(params => {
      this.Route_parameter_id = params['id']
    })
  }
  OnCheckAvailability() {
    this.submitted = true;
    if(this.AvailabilityForm.invalid){
      return;
    }
    var resource_id = this.Route_parameter_id;
    this.availabilityservice.CheckAvailability(this.Availabilityform.Startdate.value,this.Availabilityform.Enddate.value,resource_id)
    .subscribe(
      data => {
        if (data==false)
        {
          this.show_form = true;
          this.BookingForm = this.formBuilder.group ({
            Startdate: ['',Validators.required],
            Enddate:['',Validators.required]
          });
        }
        else {
          alert("The requested device is not available on the specified date");
        }
      },
      error => {}
    );
  }
  OnClickBook() {
    var lstorage = this.localstorage.RetrieveItem("Email_id");
    var available_resource_id = this.Route_parameter_id;
    this.bookresourceservice.BookResource(this.bookform.Startdate.value,this.bookform.Enddate.value,available_resource_id,lstorage)
    .subscribe(
      bookingdetails => {
        this.bookingdetails = bookingdetails;
        this.router.navigate(["/completion"]);
      },
      error => {}
    );
  }
}
