import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Role } from '../Models/role';
import { CommonModule } from '@angular/common';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [RouterModule,RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})

export class AddRoleComponent {

  constructor(private roleApi:RoleService)
  {

  }

   roles?:Role;
   roleDetailsForm=new FormGroup({
     name:new FormControl('',[Validators.required]),
     location:new FormControl('',Validators.required),
     department:new FormControl('',Validators.required),
     description:new FormControl('',Validators.required)
   })

   roleDeatilsSubmission(){
     var model=this.roleDetailsForm.value;
     this.roles=new Role();
     this.roles.name=model.name!;
     this.roles.location=model.location!;
     this.roles.department=model.department!;
     this.roles.description=model.description!;
     this.roleApi.setRols(this.roles).subscribe();
   }

}