import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeListItem } from '../employees/models/employee-list-item.type';

@Component({
	selector: 'app-employee-list-item',
	templateUrl: './employee-list-item.component.html',
	styleUrls: [ './employee-list-item.component.scss' ]
})
export class EmployeeListItemComponent {
	@Input() public employee?: EmployeeListItem;
	@Output() deleteClicked = new EventEmitter<number>();

	onDelete($event: any) {
		$event.stopPropagation();
		this.deleteClicked.emit(this.employee?.id);
	}
}
