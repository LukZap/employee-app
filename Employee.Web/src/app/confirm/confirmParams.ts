export class ConfirmParams {
	private _confirm: string;
	public get confirm(): string {
		return this._confirm;
	}

    private _decline : string;
    public get decline() : string {
        return this._decline;
    }

    
    private _question : string;
    public get question() : string {
        return this._question;
    }
    

    constructor(question: string, confirm: string, decline: string) {
        this._confirm = confirm;
        this._decline = decline;
        this._question = question;
    }
}
