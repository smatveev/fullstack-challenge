import { Component, OnInit } from '@angular/core';
import { ReportService } from "../report.service";

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styles: [
  ]
})
export class ReportsListComponent implements OnInit {

  constructor(public service: ReportService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onBlock(id: string) {
    if(confirm('Block the resource linked with this report?')) {
      this.service.blockReport(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => {console.log(err)}
      )
    }
  }

  onResolve(id: string) {
    if(confirm('Close this report?')) {
      this.service.resolveReport(id)
    .subscribe(
      res => {
        this.service.refreshList();
      },
      err => {console.log(err)}
    )
    }
  }

}
