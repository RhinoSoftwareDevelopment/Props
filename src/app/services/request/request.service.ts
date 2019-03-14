import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
import { PropRequest } from 'src/app/shared/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly REQUESTS_COLLECTION_NAME = 'requests';
  private requests$: Observable<PropRequest[]>;
  private requestsCollection: AngularFirestoreCollection<PropRequest>;

  constructor(
    private afs: AngularFirestore,
    private authenticationService: AuthenticationService
  ) {
    this.requestsCollection = this.afs.collection<PropRequest>(this.REQUESTS_COLLECTION_NAME);
    this.requests$ = this.requestsCollection.valueChanges();
  }

  /**
   * Returns all the requests found in the database.
   */
  getRequests(): Observable<PropRequest[]> {
    return this.requests$;
  }

  /**
   * Creates a new request in the database.
   */
  addRequest(newRequest: PropRequest): void {
    this.requestsCollection.add(newRequest);
  }
}
