import { TestBed } from '@angular/core/testing';

import { CounterLogicService } from './counter-logic.service';

describe('CounterLogicService', () => {
  let service: CounterLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
