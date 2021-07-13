import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConfirmService {
	public show$: Subject<boolean> = new Subject<boolean>();

	constructor() {}

	showDialog() {
		this.show$.next(true);
	}
}
