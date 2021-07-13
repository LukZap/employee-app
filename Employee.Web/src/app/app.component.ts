import { Component, OnInit } from '@angular/core';
import { ConfirmService } from './confirm/confirm.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	confirmVisible: boolean = false;

	constructor(private readonly confirmService: ConfirmService) {}

	ngOnInit(): void {
		this.confirmService.show$.subscribe((x) => (this.confirmVisible = x));
	}
}
