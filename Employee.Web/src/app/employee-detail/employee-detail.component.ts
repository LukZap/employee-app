import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ACCEPTED_FILE_TYPES } from '../consts/consts';
import { EmployeeDetails } from '../employees/models/employee-details.type';

@Component({
	selector: 'app-employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: [ './employee-detail.component.scss' ]
})
export class EmployeeDetailComponent {
	@Input() employee?: EmployeeDetails;
	@Output() saveClicked = new EventEmitter<EmployeeDetails>();
	@Output() deleteClicked = new EventEmitter<number>();

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

	onDelete() {
		this.deleteClicked.emit(this.employee?.id);
	}

	uploadFile(fileInput: HTMLInputElement) {
		let files = fileInput.files 

		if(!files || files.length === 0) {
			return
		}
		
		const image = files[0];
		if(!ACCEPTED_FILE_TYPES.includes(image.type)) {
			return
		}
		
		const reader = new FileReader();
		reader.onloadend = () => {
			if(this.employee) {
				this.employee.imageUrl = reader.result as string;
			}
		};
		reader.readAsDataURL(image);
	}
}
