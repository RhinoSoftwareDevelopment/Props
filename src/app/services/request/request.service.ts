import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PropRequest } from 'src/app/shared/request.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RequestState } from 'src/app/shared/request-state.enum';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly REQUESTS_COLLECTION_NAME = 'requests';
  private requestsCollection: AngularFirestoreCollection<PropRequest>;
  private adminRequestsCollection: AngularFirestoreCollection<PropRequest>;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.requestsCollection = this.afs.collection<PropRequest>
      (this.REQUESTS_COLLECTION_NAME, ref => ref
        .orderBy('time_stamp', 'desc')
        .where('uid', '==', sessionStorage.getItem('uid'))
      );
    this.adminRequestsCollection = this.afs.collection<PropRequest>(
      this.REQUESTS_COLLECTION_NAME, ref => ref
        .orderBy('time_stamp', 'asc')
        .where('state', '==', RequestState.RECEIVED)
    );
  }

  /**
   * Returns all the requests found in the database.
   */
  getRequests(): Observable<PropRequest[]> {
    return this.requestsCollection.valueChanges();
  }

  /**
   * Creates a new request in the database. If there
   * is an error it shows an alert.
   */
  addRequest(newRequest: PropRequest): void {
    this.requestsCollection.add(newRequest)
      .then(resolve => this.router.navigate(['requests']))
      .catch(error => {
        console.error(error);
        alert('Error Interno, revisa los datos insertados');
      });
  }

  /**
   * Returns all requests who's state is RECEIVED
   */
  getPendingRequests(): Observable<PropRequest[]> {
    return this.adminRequestsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const request = a.payload.doc.data() as PropRequest;
          const requestId = a.payload.doc.id;
          request.id = requestId;
          return request;
        });
      })
    );
  }

  /**
   * Updates the request to the object in the parameter
   */
  updateRequestState(newState: RequestState, requestId: string): void {
    const endPoint = this.REQUESTS_COLLECTION_NAME + `/${requestId}`;
    this.afs.doc<PropRequest>(endPoint).update({ state: newState })
      .catch(error => {
        console.error(error);
        alert('Error Interno, comunicate con el administrador: juan-penaloza@javeriana.edu.co');
      });
  }


}
