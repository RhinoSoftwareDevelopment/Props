import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PropRequest } from 'src/app/shared/request.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly REQUESTS_COLLECTION_NAME = 'requests';
  private requestsCollection: AngularFirestoreCollection<PropRequest>;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
  ) {
    const uid = sessionStorage.getItem('uid');
    this.requestsCollection = this.afs.collection<PropRequest>
      (this.REQUESTS_COLLECTION_NAME, ref => ref.where('uid', '==', sessionStorage.getItem('uid')));
  }

  /**
   * Returns all the requests found in the database.
   */
  getRequests(): Observable<PropRequest[]> {
    return this.requestsCollection.valueChanges();
  }

  /**
   * Creates a new request in the database.
   */
  addRequest(newRequest: PropRequest): void {
    this.requestsCollection.add(newRequest);
    this.router.navigate(['requests']);
  }


}
