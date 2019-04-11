import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { PropRequest } from './shared/request.model';
import { RequestState } from './shared/request-state.enum';
import { User } from './shared/user.model';

admin.initializeApp();
/**
 * Creates a request with an initial state of 'Received'
 */
export const createRequest = functions.firestore
    .document('requests/{requestId}')
    .onCreate((snap, context) => {
        const requestId = context.params.requestId;
        const newRequest = snap.data() as PropRequest;
        newRequest.state = RequestState.RECEIVED;
        newRequest.time_stamp = new Date();
        const newRequestReference = admin.firestore().collection('requests').doc(requestId);
        return newRequestReference.update(newRequest);
    });

/**
 * Creates a user with isAdmin false.
 */
export const createUser = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
        const userId = context.params.userId;
        const newUser = snap.data() as User;
        newUser.isAdmin = false;
        const newUserReference = admin.firestore().collection('users').doc(userId);
        return newUserReference;
    });