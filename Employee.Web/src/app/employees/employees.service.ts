import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeListItem } from './models/employee-list-item.type';
import { EmployeeDetails } from './models/employee-details.type';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	public static employeeUrl = `${environment.apiUrl}/employee`;

	constructor(private readonly http: HttpClient) {}

	public getEmployeeList(): Observable<EmployeeListItem[]> {
		return this.http.get<EmployeeListItem[]>(EmployeeService.employeeUrl);
	}

	public getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
		return this.http.get<EmployeeDetails>(`${EmployeeService.employeeUrl}/${employeeId}`);
	}

	public saveEmployeeDetails(employee: EmployeeDetails): Observable<EmployeeDetails> {
		if (employee.id !== 0) {
			return this.http.put<EmployeeDetails>(EmployeeService.employeeUrl, employee);
		}

		return this.http.post<EmployeeDetails>(EmployeeService.employeeUrl, employee);
	}

	public deleteEmployee(employeeId: number) {
		return this.http.delete<EmployeeDetails>(EmployeeService.employeeUrl, { params: { id: employeeId } });
	}
}
