import { Component, OnInit, Input } from '@angular/core';
import { PropRequest } from 'src/app/shared/request.model';
import { User } from 'src/app/shared/user.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Article } from 'src/app/shared/article.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { RequestService } from 'src/app/services/request/request.service';
import { RequestState } from 'src/app/shared/request-state.enum';

@Component({
  selector: 'app-submission-card',
  templateUrl: './submission-card.component.html',
  styleUrls: ['./submission-card.component.scss']
})
export class SubmissionCardComponent implements OnInit {

  @Input() request: PropRequest;
  user: User;
  article: Article;

  constructor(
    private authenticationService: AuthenticationService,
    private articlesService: ArticlesService,
    private requestService: RequestService
    ) { }

  ngOnInit() {
    console.log(this.request);
    this.authenticationService.getUserById(this.request.uid).subscribe(user => this.user = user);
    this.articlesService.getArticleById(this.request.articleId).subscribe(article => this.article = article);
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
