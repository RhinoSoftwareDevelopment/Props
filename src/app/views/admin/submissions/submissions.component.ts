import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropRequest } from 'src/app/shared/request.model';
import { RequestService } from 'src/app/services/request/request.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject();
  pendingRequest: PropRequest[];

  constructor(private requestsService: RequestService) { }

  ngOnInit() {
    this.requestsService.getPendingRequests()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(pendingRequests => this.pendingRequest = pendingRequests);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
