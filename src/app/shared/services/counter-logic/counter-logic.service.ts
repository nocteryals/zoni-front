import { Injectable } from '@angular/core';
import { FirebaseConnectionService } from '../firebase-connection/firebase-connection.service';

@Injectable({
  providedIn: 'root',
})
export class CounterLogicService {
  private _counter: number = 0;
  private _track: number[] = [];

  constructor(private firebaseConnectionService: FirebaseConnectionService) {
    this.firebaseConnectionService
      .getCurrentCounterValue()
      .then((counterValue) => {
        this._counter = counterValue;
        this._track = [this._counter];
      });
  }

  public get counter(): number {
    return this._counter;
  }

  public get track(): number[] {
    return this._track;
  }

  public addToCounter() {
    this._counter++;
    this.trackCounter();
    this.firebaseConnectionService.updateCounter(this._counter);
  }

  private trackCounter() {
    this._track.push(this._counter);
  }

  public subtractFromCounter() {
    this._counter--;
    this.trackCounter();
    this.firebaseConnectionService.updateCounter(this._counter);
  }

  public resetCounter() {
    this._counter = 0;
    this.trackCounter();
    this.firebaseConnectionService.updateCounter(this._counter);
  }
}
