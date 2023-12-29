import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterLogicService {
  private _counter: number;
  private _track: number[];

  constructor() {
    this._counter = 0;
    this._track = [0];
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
  }

  private trackCounter() {
    this._track.push(this._counter);
  }

  public subtractFromCounter() {
    this._counter--;
    this.trackCounter();
  }

  public resetCounter() {
    this._counter = 0;
    this.trackCounter();
  }
}
