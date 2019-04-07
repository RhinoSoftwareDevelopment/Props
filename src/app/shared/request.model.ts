import { RequestState } from './request-state.enum';
// import { firestore } from 'firebase';

export interface PropRequest {
    professor_incharge: string;
    proyect: string;
    begin: Date;
    end: Date;
    articleId: string;
    uid?: string;
    state?: RequestState;
    time_stamp?: Date;
    id?: string;
}
