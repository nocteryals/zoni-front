import { Component } from '@angular/core';
import { CounterLogicService } from '../../services/counter-logic/counter-logic.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(public counterLogicService: CounterLogicService) {
  }

}
