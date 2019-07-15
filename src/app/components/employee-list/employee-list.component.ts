import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'ng5-master/src/app/services/employee.service';

@Component({
  selector: '[app-employee-list]',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

public employees = [];
  constructor(private _employeeServices : EmployeeService) { 

  }

  ngOnInit() {
    this.employees = this._employeeServices.getEmployees();
  }

}

