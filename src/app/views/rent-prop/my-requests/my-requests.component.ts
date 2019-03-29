import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';
import { PropRequest } from 'src/app/shared/request.model';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {

  requests: PropRequest[];

  constructor(
    private requestServices: RequestService
  ) { }

  ngOnInit() {
    this.requestServices.getRequests().subscribe(
      request => {
        this.requests = request;
        console.log(this.requests);
        
      });
  }

}
