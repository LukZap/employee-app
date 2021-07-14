import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmService } from '../confirm/confirm.service';
import { ConfirmParams } from '../confirm/confirmParams';
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

	constructor(
		private readonly employeeService: EmployeeService,
		private readonly confirmService: ConfirmService
	) {}

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
			job: '',
			imageUrl: ''
		}
		this.detailComponent.toggleEditMode(true);
	}

	onSave(employee: EmployeeDetails) {
		this.employeeService.saveEmployeeDetails(employee).subscribe(res => {
			this.items$ = this.employeeService.getEmployeeList();
			this.selectedItemId = res.id;

			if(this.selectedEmployee) {
				this.selectedEmployee.id = res.id;
			}
		});
	}

	async onDelete(employeeId: number) {
		let confirmResult = await this.confirmService.showDialog(
			new ConfirmParams('Are you sure you want to delete?', 'Ok', 'Cancel')
		)

		if(!confirmResult) {
			return
		}

		if(employeeId === 0) {
			this.clearEmployeeSelection();
			return
		}

		this.employeeService.deleteEmployee(employeeId)?.subscribe(() => {
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
