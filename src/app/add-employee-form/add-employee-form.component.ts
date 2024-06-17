import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../Models/Employee';
import { Role } from '../Models/role';
import { RoleService } from '../role.service';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [RouterModule,RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './add-employee-form.component.html',
  styleUrl: './add-employee-form.component.css'
})
export class AddEmployeeFormComponent implements OnInit{
  employees?:Employee;
  roles:Role[]=[];

  constructor(private api:RoleService,private employeeApi:EmployeeService)
  {

  }

  employeeDetailsForm=new FormGroup({
    Id: new FormControl('', [Validators.required]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    mobileNumber: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    role: new FormControl('',[Validators.required]),
    department: new FormControl('',[Validators.required]),
    manager: new FormControl('',[Validators.required]),
    project: new FormControl('',[Validators.required]),
    dateOfBirth: new FormControl('',[Validators.required]),
    dateOfJoin: new FormControl('',[Validators.required]),
  })
  
  ngOnInit(): void {
     this.api.getRoles().subscribe(role=>{
      this.roles=role;
      console.log(this.roles);
     });
  }

  employeeDeatilsSubmission(){
    var model=this.employeeDetailsForm.value;
      this.employees=new Employee();
      this.employees.firstName=model.firstName!;
      this.employees.lastName=model.lastName!;
      this.employees.dateOfBirth=model.dateOfBirth!;
      this.employees.dateOfJoin=model.dateOfJoin!;
      this.employees.department=model.department!;
      this.employees.email=model.email!;
      this.employees.jobTitle=model.role!;
      this.employees.location=model.location!;
      this.employees.mobileNumber=Number(model.mobileNumber!);
      this.employees.manager=model.manager!;
      this.employees.project=model.project!;
      this.employeeApi.setEmployees(this.employees).subscribe();
  }
}