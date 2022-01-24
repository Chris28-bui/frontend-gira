import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-information-page',
  templateUrl: './employee-information-page.component.html',
  styleUrls: ['./employee-information-page.component.css']
})
export class EmployeeInformationPageComponent implements OnInit {

  constructor() { }
  name: string = 'Tue Bui';
  dob: string = '06/28/1999';
  address: string = '95 The Pond Road';
  phone: string = '4158268286';
  email: string = 'bt28061999@gmail.com';
  start_date: string = '01/01/2022';
  past_project: string = 'asd';
  ngOnInit(): void {
  }

}
