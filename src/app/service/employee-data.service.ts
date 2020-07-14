import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../list-employees/list-employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http: HttpClient  // import HttpClient to make Http Request
  ) { }

  retrieveAllEmployees() {
    return this.http.get<Employee[]>(`http://localhost:8080/employee`);
  }
}
