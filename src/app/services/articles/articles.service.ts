import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Article } from 'src/app/shared/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly ARTICLES_COLECTION_NAME = 'articles';
  private articles: Observable<Article[]>;
  private articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private afs: AngularFirestore) {
    this.articles = this.afs.collection<Article>(this.ARTICLES_COLECTION_NAME).valueChanges();
  }

  getArticles(): Observable<Article[]> {
    return this.articles;
  }
}
