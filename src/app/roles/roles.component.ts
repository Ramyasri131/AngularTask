import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Role } from '../Models/role';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AddRoleComponent } from '../add-role/add-role.component';
import { RoleDetailsComponent } from '../role-details/role-details.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule,AddRoleComponent,RouterModule,RoleDetailsComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit{
  roles:Role[]=[];
  roleSubscription:Subscription|undefined;
  constructor(private api:RoleService,private router:Router){
    
  }

  ngOnInit(): void {
    this.api.getRoles().subscribe(role=>{
      this.roles=role;
      console.log(this.roles);
    })
  }

  openAddRoleForm(){
    // this.router.navigate(['/add-employee-form']);
    this.router.navigate(['/add-role']);
  }

  openEmployeeDetails(roleName:string){
    console.log(roleName);
    localStorage.setItem('roleName', JSON.stringify(roleName));
    this.router.navigate(['role-details']);
  }
}