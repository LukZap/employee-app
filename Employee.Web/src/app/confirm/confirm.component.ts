import { Component, OnInit } from '@angular/core';
import { ConfirmService } from './confirm.service';
import { ConfirmParams } from './confirmParams';

@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: [ './confirm.component.scss' ]
})
export class ConfirmComponent implements OnInit {
	params!: ConfirmParams;

	constructor(private readonly confirmService: ConfirmService) {}

	ngOnInit(): void {
		this.confirmService.params$.subscribe((p) => (this.params = p));
	}

	confirm() {
		this.confirmService.closeDialog(true);
	}

	decline() {
		this.confirmService.closeDialog(false);
	}
}
