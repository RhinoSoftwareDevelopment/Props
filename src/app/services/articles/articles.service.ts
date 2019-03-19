import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Article } from 'src/app/shared/article.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly ARTICLES_COLLECTION_NAME = 'articles';
  private articles$: Observable<Article[]>;
  private articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private afs: AngularFirestore) {
    this.articlesCollection = this.afs.collection<Article>(this.ARTICLES_COLLECTION_NAME);
    this.articles$ = this.articlesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => { 
          const article = a.payload.doc.data() as Article;
          const articleId = a.payload.doc.id;
          article.id = articleId;
          return article;
        });
      })
    )
  }

  /**
   * Returns all the articles found in the database.
   */
  getArticles(): Observable<Article[]> {
    return this.articles$;
  }

  /**
   * Finds in memory the article with the ID provided.
   * @param articleId ID of the article to find
   */
  getArticleById(articleId: string): Observable<Article> {
    // TODO - Some problems when I run it in my Macbook, we should do tests.
    return this.articles$.pipe(map(articles => articles.find(article => article.id === articleId)));
  }
}
