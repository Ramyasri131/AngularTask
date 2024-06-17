import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    const customHeaders=new HttpHeaders().set("Authorization","Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InJhbXlhQHRlem8uY29tIiwiUGFzc3dvcmQiOiJSYW15YUAxMjMiLCJJZCI6IlRaMDAwMSIsInJvbGUiOiJMZWFkIGRldmVsb3BlciIsImV4cCI6MTcxODcwMTg3NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEyMiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMjIifQ.xl_fW2sZA_4IXbWCG-MidxOmclsU0cq6MoNbzmG3qQM");
    return this.http.get<Employee[]>("https://localhost:7122/Employee",{headers:customHeaders});
  }

  setEmployees(employee:Employee):Observable<Employee>{
    const customHeaders=new HttpHeaders().set("Authorization","Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InJhbXlhQHRlem8uY29tIiwiUGFzc3dvcmQiOiJSYW15YUAxMjMiLCJJZCI6IlRaMDAwMSIsInJvbGUiOiJMZWFkIGRldmVsb3BlciIsImV4cCI6MTcxODcwMTg3NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEyMiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMjIifQ.xl_fW2sZA_4IXbWCG-MidxOmclsU0cq6MoNbzmG3qQM");
    console.log(employee);
    return this.http.post<Employee>("https://localhost:7122/Employee",employee,{headers:customHeaders});
  }
}