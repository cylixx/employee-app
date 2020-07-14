import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';

// class to map the fields of Employee in the RESTful service
export class Employee {
  constructor(
    public id: number,
    public name: string,
    public department: string
  ){}
}

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] 

  constructor(
    private employeeService: EmployeeDataService  // import service to invoke our RESTful services
  ) { }

  ngOnInit() {
    this.allEmployees();
  }

  allEmployees() {
    this.employeeService.retrieveAllEmployees().subscribe(
      response => {
        console.log(response);
        this.employees = response;
      }
    )
  }

}
