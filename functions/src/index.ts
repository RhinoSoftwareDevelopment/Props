import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { PropRequest } from './shared/request.model';
import { RequestState } from './shared/request-state.enum';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


admin.initializeApp();
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
