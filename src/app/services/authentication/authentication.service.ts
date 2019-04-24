import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { User } from '../../shared/user.model';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedUser$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  currentUid: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.loggedUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.currentUid = user.uid;
          sessionStorage.setItem('uid', user.uid);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.isLoggedIn$ = this.afAuth.authState
      .pipe(map<firebase.User, boolean>(user => user != null));
    this.isAdmin$ = this.loggedUser$
      .pipe(map<User, boolean>(user => user.isAdmin === true));
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
    this.loggedUser$.subscribe().unsubscribe();
    this.isLoggedIn$.subscribe().unsubscribe();
    await this.afAuth.auth.signOut();
    sessionStorage.clear();
    return this.router.navigate(['/']);
  }

  /**
   * Updates FireStore with the data of the user.
   * @param userData User's data
   */
  private updateUserData({ uid, email, displayName, photoURL }: User) {
    if (!photoURL) {
      photoURL = `https://firebasestorage.googleapis.com/v0/b/bookprop-dae19.appspot.com/o/
      profie.jpg?alt=media&token=efd93a58-64e6-4204-8bb4-78ae723b3a7f`;
    }
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = { uid, email, displayName, photoURL };
    return userRef.set(data, { merge: true });
  }

  /**
   * Gets logged user information
   */
  getLoggedUser(): Observable<User> {
    return this.loggedUser$;
  }

  /**
   * Gets the user by Id
   */
  getUserById(userId: string): Observable<User> {
    return this.afs.doc<User>(`users/${userId}`).valueChanges();
  }

  /**
   * Creates a new user account with a password.
   * @param email User's email
   * @param password User's password
   */
  createUserWithEmailAndPassword(newUser: User, password: string): Promise<void | auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, password)
      .then(credential => {
        newUser.uid = credential.user.uid;
        sessionStorage.setItem('uid', newUser.uid);
        this.updateUserData(newUser);
        this.router.navigate(['catalog']);
      })
      .catch(error => {
        console.error(error);
        alert('Error al crear usuario\n' + error.message);
      });
  }

  /**
   * Signs in a new user account with a password.
   * @param email User's email
   * @param password User's password
   */
  signInUserWithEmailAndPassword(email: string, password: string): Promise<void | auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(credential => {
        // this.updateUserData(credential.user);
        sessionStorage.setItem('uid', credential.user.uid);
        this.router.navigate(['catalog']);
      })
      .catch(error => {
        console.error(error);
        alert('Error al crear usuario\n' + error.message);
      });
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
