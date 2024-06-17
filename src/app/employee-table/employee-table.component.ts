import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../Models/Employee';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit{
  employees:Employee[]=[];
  employeeSubscription:Subscription|undefined;

  constructor(private router: Router,private api:EmployeeService) {

  }

  onClick() {
    this.router.navigate(['/add-employee-form']);
  }

   
  ngOnInit(): void {
    this.employeeSubscription=this.api.getEmployees().subscribe(emp=>{
      this.employees=emp;
      console.log(emp);
    })
  }
  

}
