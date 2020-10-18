import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../todo.service';


@Component({
  selector: 'app-todocreate',
  templateUrl: './todocreate.component.html',
  styleUrls: ['./todocreate.component.css']
})
export class TodocreateComponent implements OnInit {

  id;
  name;
  dept;

  constructor(private empServ:EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.empServ.createEmployee(this.id,this.name,this.dept);
  }

}