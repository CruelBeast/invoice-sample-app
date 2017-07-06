import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-report',
  templateUrl: './error-report.component.html',
  styleUrls: ['./error-report.component.css']
})
export class ErrorReportComponent implements OnInit {

  @Input() error: Error;
  constructor() { }

  ngOnInit() {
  }

}
