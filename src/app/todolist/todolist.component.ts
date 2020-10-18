import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  employeeDetailsName

  constructor(private employeeList: EmployeeService) { }

  ngOnInit(): void {

    this.employeeDetailsName=this.employeeList.employeeDetails
  }

}