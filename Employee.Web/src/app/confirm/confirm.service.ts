import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ConfirmParams } from './confirmParams';

@Injectable({
	providedIn: 'root'
})
export class ConfirmService {
	private readonly paramsSubject: Subject<ConfirmParams> = new ReplaySubject<ConfirmParams>();
	private confirmedSubject: Subject<boolean> = new AsyncSubject<boolean>();
	private showSubject: Subject<boolean> = new Subject<boolean>();

	public show$: Observable<boolean>;
	public params$: Observable<ConfirmParams>;

	constructor() {
		this.params$ = this.paramsSubject.asObservable();
		this.show$ = this.showSubject.asObservable();
	}

	showDialog(params: ConfirmParams): Promise<boolean> {
		this.showSubject.next(true);
		this.paramsSubject.next(params);

		// create fresh subject to emit a value when closeDialog() is called
		this.confirmedSubject = new AsyncSubject<boolean>();

		return this.confirmedSubject.toPromise();
	}

	closeDialog(confirm: boolean) {
		this.showSubject.next(false);
		this.confirmedSubject.next(confirm);
		this.confirmedSubject.complete();
	}
}
