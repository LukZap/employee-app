import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input() question!: string;
  @Input() confirm!: string;
  @Input() decline!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
