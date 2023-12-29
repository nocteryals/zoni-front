import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';

const COUNTER_COLLECTION = 'counters';
const COUNTER_KEY = 'kjash7as7ab8a7sbaiiab8B8Uu8UK';

interface counter {
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseConnectionService {
  private firestore: Firestore;
  private collectionRef: CollectionReference;

  constructor() {
    this.firestore = inject(Firestore);
    this.collectionRef = collection(this.firestore, COUNTER_COLLECTION);
  }

  public async getCurrentCounterValue(): Promise<number> {
    try {
      return (
        (await getDoc(doc(this.collectionRef, COUNTER_KEY))).data() as counter
      ).value;
    } catch (exception) {
      console.error(exception);
      return 0;
    }
  }

  public updateCounter(newCounterValue: number) {
    try {
      updateDoc(doc(this.collectionRef, COUNTER_KEY), {
        value: newCounterValue,
      });
    } catch (exception) {
      console.error(exception);
    }
  }
}
