import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';


declare var $: any;


@Component({
  selector: 'app-root,modal-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  form: FormGroup;
  name = new FormControl('');

  rest_url = "http://localhost:4300/";
  prop_d:any;
  tenants:any;

  constructor(public http: HttpClient, private router: Router, public fb: FormBuilder) {
    this.form = this.fb.group({
      property_name: [''],
      property_type: [''],
      street_address: [''],
      owner: [''],
      unit_number: [''],
      manager: [''],

      first_name: [''],
      last_name: [''],
      unit_numbert: [''],
      phone:  [''],
      email: [''],

      avatar: [null]
    })
  }
  // constructor( {}


  ngOnInit() { 
    this.refreshList();

  }

  title = 'client';

  submitForm() {
    console.log(this.form.value)
  }
  submitTenant() {
    console.log(this.form.value)
    // this.http.post(this.rest_url+'properties',this.prop_d);
    // console.log(this.http.post(this.rest_url+'properties',this.prop_d));

    this.http.post<any>(this.rest_url+'properties', { title: 'Angular POST Request Example' }).subscribe({
      next: data => {
         this.form.value;
      }
  })
  }

  refreshList(){
    this.getDataList().then(res => this.prop_d = res);

    this.getTenants().then(res => this.tenants =res);

  }
  getDataList(){
    // console.log(">>>>>>>>>>>"+this.http.get(this.rest_url + 'properties'));
    return this.http.get(this.rest_url + 'properties').toPromise();

  }
  getTenants(){
    return this.http.get(this.rest_url + 'tenants').toPromise();
  }
}
