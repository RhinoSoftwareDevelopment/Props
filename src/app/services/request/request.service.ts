import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { PropRequest } from 'src/app/shared/request.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly REQUESTS_COLLECTION_NAME = 'requests';
  private requests$: Observable<PropRequest[]>;
  private requestsCollection: AngularFirestoreCollection<PropRequest>;
  private userId: string;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    // this.getUid();
    this.requestsCollection = this.afs.collection<PropRequest>(this.REQUESTS_COLLECTION_NAME);
    this.requests$ = this.requestsCollection.valueChanges();
  }

  /**
   * Returns all the requests found in the database.
   */
  getRequests(): Observable<PropRequest[]> {
    // if(!this.userId) return; // This validation should be done in the backend.
    return this.requests$;
  }

  /**
   * Creates a new request in the database.
   */
  addRequest(newRequest: PropRequest): void {
    this.requestsCollection.add(newRequest);
    this.router.navigate(['requests']);
  }

  /**
   * Gets the user id of the current logged user and
   * assigns it to property uid.
   */
  private getUid(): void {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userId = user.uid;
      }
    });
  }

}
