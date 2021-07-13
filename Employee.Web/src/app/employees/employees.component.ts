import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeService } from './employees.service';
import { EmployeeDetails } from './models/employee-details.type';
import { EmployeeListItem } from './models/employee-list-item.type';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: [ './employees.component.scss' ]
})
export class EmployeesComponent implements OnInit {
	@ViewChild(EmployeeDetailComponent) detailComponent!: EmployeeDetailComponent;
	
	items$!: Observable<EmployeeListItem[]>;
	selectedItemId: number = 0;
	selectedEmployee?: EmployeeDetails;

	constructor(private readonly employeeService: EmployeeService) {}

	ngOnInit(): void {
		this.items$ = this.employeeService.getEmployeeList();
	}

	onSelect(id: number) {
		this.detailComponent.toggleEditMode(false);

		if (this.selectedItemId === id) {
			this.clearEmployeeSelection();
			return
		} 
		
		this.selectedItemId = id;
		this.employeeService.getEmployeeDetails(id).subscribe(employee => 
			this.selectedEmployee = employee);
	}

	onAdd() {
		this.selectedItemId = 0;
		this.selectedEmployee = {
			id: 0,
			blog: '',
			hobbies: '',
			hometown: '',
			motto: '',
			name: '',
			job: ''
		}
		this.detailComponent.toggleEditMode(true);
	}

	save(employee: EmployeeDetails) {
		this.employeeService.saveEmployeeDetails(employee).subscribe(res => {
			this.items$ = this.employeeService.getEmployeeList();
			this.selectedItemId = res.id;
		});
	}

	delete(employeeId: number) {
		this.employeeService.deleteEmployee(employeeId).subscribe(res => {
			this.items$ = this.employeeService.getEmployeeList();
			this.clearEmployeeSelection();
		});
	}

	private clearEmployeeSelection()
	{
		this.selectedItemId = 0;
		this.selectedEmployee = undefined;
	}
}


