import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../todo.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {

  employeeDetails

  constructor(private empServ:EmployeeService) { }

  ngOnInit(): void {

    this.employeeDetails=this.empServ.employeeDetails
  }
  deleteEmployee(){
    this.empServ.deleteEmployee(this.employeeDetails.id);
  }
}