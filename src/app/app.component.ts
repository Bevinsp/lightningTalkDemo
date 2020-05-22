import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testApp';
  stateOptions = ['AR','AZ','OH','TX'];
  countryOptions = ['United States','Canada','Mexico'];
  radioOptions = ['Person', 'Business'];
  testForm : FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.testForm = this.createTestForm()
  }

  createTestForm() {
    return this.fb.group({
      personOrBusiness: ['Person',[]],
      firstName: ['',[]],
      lastName: ['',[]],
      businessName: ['',[]],
      addressLine1: ['',[]],
      addressLine2: ['',[]],
      city: ['',[]],
      state: ['',[]],
      country: ['',[]]
    });
  }

}
