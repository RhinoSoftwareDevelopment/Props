import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';
import { PropRequest } from 'src/app/shared/request.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject();
  requests: PropRequest[];

  constructor(
    private requestServices: RequestService
  ) { }

  ngOnInit() {
    this.requestServices.getRequests()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(request => this.requests = request);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
