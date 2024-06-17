import { Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { RolesComponent } from './roles/roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleDetailsComponent } from './role-details/role-details.component';

export const routes: Routes = [
    { path: 'employee-table', component: EmployeeTableComponent },
    { path: 'add-employee-form', component: AddEmployeeFormComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'add-role', component: AddRoleComponent },
    { path: 'role-details', component: RoleDetailsComponent},
    { path: '', redirectTo: '', pathMatch: 'full' }
];