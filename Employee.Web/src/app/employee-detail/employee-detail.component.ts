import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeDetails } from '../employees/models/employee-details.type';

@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: [ './employee-detail.component.scss' ]
})
export class EmployeeDetailComponent {
	@Input() employee?: EmployeeDetails;
	@Output() saveClicked = new EventEmitter<EmployeeDetails>();

	editMode: boolean = false;

	public toggleEditMode(activate?: boolean) {
		if (activate !== undefined) {
			this.editMode = activate;
			return;
		}

		this.editMode = !this.editMode;
	}

	onSave() {
		this.saveClicked.emit(this.employee);
	}
}
