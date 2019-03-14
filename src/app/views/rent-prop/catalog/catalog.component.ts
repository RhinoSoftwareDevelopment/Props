import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { Article } from 'src/app/shared/article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  articles: Article[];

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(res => {
      this.articles = res;
    });
  }

  /**
   * Navigates to rent form component and sends
   * the article's id as a parámeter.
   * @param articleToRent article to rent
   */
  goToRentPropForm(articleToRent: Article) {
    this.router.navigate(['/rent-form', articleToRent.id]);
  }

}
