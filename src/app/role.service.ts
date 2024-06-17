import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from './Models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { 

  }
  getRoles():Observable<Role[]>{
    const customHeaders=new HttpHeaders().set("Authorization","Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6InJhbXlhQHRlem8uY29tIiwiUGFzc3dvcmQiOiJSYW15YUAxMjMiLCJJZCI6IlRaMDAwMSIsInJvbGUiOiJMZWFkIGRldmVsb3BlciIsImV4cCI6MTcxODY5MTY2MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEyMiIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMjIifQ.e0VSneCCWlbaF1Fga5h7XQJjk5Z0twV7qbe3ojvRN9E");
    return this.http.get<Role[]>("https://localhost:7122/Role",{headers:customHeaders})
  }

  setRols(role:Role):Observable<Role>{
    return this.http.post<Role>("https://localhost:7122/Role",role);
  }
}
