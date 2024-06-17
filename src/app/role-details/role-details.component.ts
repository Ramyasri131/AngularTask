import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RolesComponent } from '../roles/roles.component';
import { Employee } from '../Models/Employee';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role-details',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RolesComponent,CommonModule],
  templateUrl: './role-details.component.html',
  styleUrl: './role-details.component.css'
})
export class RoleDetailsComponent implements OnInit {
  employees: Employee[] = [];
  employeesDisplay: Employee[] = [];
  roleName: string = "";
  employeeSubscription: Subscription | undefined;

  constructor(private api: EmployeeService) {

  }

  ngOnInit(): void {
    this.roleName = JSON.parse(localStorage.getItem('roleName')!);
    this.employeeSubscription = this.api.getEmployees().subscribe(emp => {
      this.employees = emp;
      this.employees.forEach(e => {
        if (e.jobTitle == this.roleName) {
          this.employeesDisplay.push(e);
        }
      })
    })
  }
}