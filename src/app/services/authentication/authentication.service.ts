import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'

import { User } from '../../shared/user.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    // this.loggedUser$ = this.afAuth.authState;
    this.loggedUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    // this.checkIfUserIsLoggedIn(); 
  }

  /**
   * Opens a popup window to login using google authentication
   * and if succeed redirects to the Catalog component.
   */
  async googleLogin(): Promise<boolean> {
    const googleProvider = new auth.GoogleAuthProvider();
    const googleCredentials = await this.afAuth.auth.signInWithPopup(googleProvider);
    this.updateUserData(googleCredentials.user);
    return this.router.navigate(['catalog']);
  }

  /**
   * Signs out of firebase.
   */
  async logout(): Promise<boolean> {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  /**
   * Updates FireStore with the data of the user.
   * @param userData User's data
   */
  private updateUserData({uid, email, displayName, photoURL}: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = { uid, email, displayName, photoURL };
    return userRef.set(data, { merge: true });
  }

  /**
   * If the user is logged in, we add the user's data to the browser's 
   * local storage; otherwise we store a null user
   */
  // private checkIfUserIsLoggedIn(): void {
  //   this.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.user = user;
  //       localStorage.setItem('user', JSON.stringify(this.user));
  //     } else {
  //       localStorage.setItem('user', null);
  //     }
  //   })
  // }
}
