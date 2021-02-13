import { Injectable } from '@angular/core';
import { Report } from './report.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:1711/api/Reports'
  list: Report[];

  refreshList() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(
      res => {this.list = res as Report[]},
      err => {console.log(err)}
      );
  }

  blockReport(id: string) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  resolveReport(id: string) {
    const body = { ticketState: "closed" };
    return this.http.put(`${this.baseURL}/${id}`, body);
  }
}
