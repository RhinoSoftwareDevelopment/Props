import { Component, OnInit, Input } from '@angular/core';
import { PropRequest } from 'src/app/shared/request.model';
import { Article } from 'src/app/shared/article.model';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { Warehouse } from 'src/app/shared/warehouse.enum';
import { RequestState } from 'src/app/shared/request-state.enum';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit {

  @Input() request: PropRequest;
  articleToRent: Article;

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.getArticleById(this.request.articleId)
      .subscribe(article => this.articleToRent = article);
  }

  getWarehouseName(): string {
    return Warehouse[this.articleToRent.warehouse_id];
  }

  getCardStateColor(): string {
    switch (this.request.state) {
      case RequestState.RECEIVED: return 'request__received';
      case RequestState.ACCEPTED: return 'request__accepted';
      case RequestState.REJECTED: return 'request__rejected';
    }
  }


}
