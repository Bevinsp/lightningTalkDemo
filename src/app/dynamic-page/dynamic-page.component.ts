import { Component, OnInit } from '@angular/core';
import { dynamicPageFormFields } from './dynamic-page';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  dynamicPageForm: FormGroup;
  fieldsToDisplay: any = {};

  ngOnInit(): void {
    this.dynamicPageForm = this.fb.group({});
    this.createDynamicPageForm();
  }

  createDynamicPageForm(){
    for(let field of dynamicPageFormFields) {
      if(!this.dynamicPageForm.get(field.formControlName)) {
        this.dynamicPageForm.addControl(field.formControlName, new FormControl(field.initialValue, []));
        !this.fieldsToDisplay.includes(field.formControlName)? this.fieldsToDisplay.push(field.formControlName): null;
      }
    }
  }

  getValueFrom(type, fieldName) {
    let index = dynamicPageFormFields.findIndex(x => x.formControlName === fieldName);
    switch(type) {
      case 'label': 
        return dynamicPageFormFields[index].labelText;
      case 'fieldType': 
        return dynamicPageFormFields[index].type;
      case 'options': 
        return dynamicPageFormFields[index].options;
      case 'shouldShowField':
        return dynamicPageFormFields[index].isDependentOn ? this.dynamicPageForm.get(dynamicPageFormFields[index].isDependentOn.field).value.includes(dynamicPageFormFields[index].isDependentOn.value): true;
    }
  }


}
