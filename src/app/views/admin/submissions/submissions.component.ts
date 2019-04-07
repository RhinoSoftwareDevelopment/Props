import { Component, OnInit } from '@angular/core';
import { PropRequest } from 'src/app/shared/request.model';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  pendingRequest: PropRequest[];

  constructor(private requestsService: RequestService) { }

  ngOnInit() {
    this.requestsService.getPendingRequests().subscribe(pendingRequests => this.pendingRequest = pendingRequests);
  }

}
