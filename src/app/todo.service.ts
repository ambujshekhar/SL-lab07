import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{

    employeeDetails=[
        {id:1,name:'Aaaaa',department:'CSE'},
        {id:2,name:'B',department:'ECE'},
        {id:3,name:'C',department:'IT'}
    ]    

    createEmployee(id,name,dept){
        this.employeeDetails.push({id,name,department:dept})
    }
    deleteEmployee(id:number)
    {
        const i=this.employeeDetails.findIndex(e=>e.id===id);
        if(i!==-1){
            this.employeeDetails.splice(i,1);
        }
    }
}