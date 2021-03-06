import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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
		return this.http.get<EmployeeListItem[]>(EmployeeService.employeeUrl).pipe(
			// hack to disable caching images in the employee list
			// TODO: find better way
			tap((e) =>
				e.forEach((x) => {
					if (x.imageUrl) {
						x.imageUrl = x.imageUrl + '?t=' + new Date().getTime();
					}
				})
			)
		);
	}

	public getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {
		return this.http.get<EmployeeDetails>(`${EmployeeService.employeeUrl}/${employeeId}`).pipe(
			// hack to disable caching images in the employee list
			// TODO: find better way
			tap((e) => {
				if (e.imageUrl) {
					e.imageUrl = e.imageUrl + '?t=' + new Date().getTime();
				}
			})
		);
	}

	public saveEmployeeDetails(employee: EmployeeDetails): Observable<EmployeeDetails> {
		if (employee.id !== 0) {
			return this.http.put<EmployeeDetails>(EmployeeService.employeeUrl, this._createFormData(employee)).pipe(
				// hack to disable caching images in the employee list
				// TODO: find better way
				tap((e) => {
					if (e.imageUrl) {
						e.imageUrl = e.imageUrl + '?t=' + new Date().getTime();
					}
				})
			);
		}

		return this.http.post<EmployeeDetails>(EmployeeService.employeeUrl, this._createFormData(employee));
	}

	public deleteEmployee(employeeId: number) {
		if (employeeId === 0) {
			return;
		}

		return this.http.delete(EmployeeService.employeeUrl, { params: { id: employeeId } });
	}

	private _createFormData(obj: any): FormData {
		let formData = new FormData();

		for (let key in obj) {
			if (obj[key] !== null && obj[key] !== undefined) {
				formData.append(key, obj[key]);
			}
		}
		return formData;
	}
}
