import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Teacher } from 'src/app/shared/teacher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private readonly TEACHERS_COLLECTION_NAME = 'teachers';
  private teachersCollection: AngularFirestoreCollection<Teacher>;

  constructor(
    private afs: AngularFirestore,
  ) { 
    this.teachersCollection = this.afs.collection<Teacher>(this.TEACHERS_COLLECTION_NAME);
  }

  /**
   * Returns all the teachers in the backend.
   */
  getTeachers(): Observable<Teacher[]> {
    return this.teachersCollection.valueChanges();
  }
}
