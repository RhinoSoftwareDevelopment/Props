import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PropRequest } from 'src/app/shared/request.model';
import { User } from 'src/app/shared/user.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Article } from 'src/app/shared/article.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { RequestService } from 'src/app/services/request/request.service';
import { RequestState } from 'src/app/shared/request-state.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent implements OnInit, OnDestroy {

  @Input() request: PropRequest;
  user: User;
  article: Article;

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private authenticationService: AuthenticationService,
    private articlesService: ArticlesService,
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.authenticationService.getUserById(this.request.uid)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(user => this.user = user);
    this.articlesService.getArticleById(this.request.articleId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(article => this.article = article);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  acceptRequest(): void {
    this.requestService.updateRequestState(RequestState.ACCEPTED, this.request.id);
  }

  rejectRequest(): void {
    this.requestService.updateRequestState(RequestState.REJECTED, this.request.id);
  }

  getMailToSrc(): string {
    return 'mailto:' + this.user.email + '? subject = Información sobre solicitud';
  }

}
