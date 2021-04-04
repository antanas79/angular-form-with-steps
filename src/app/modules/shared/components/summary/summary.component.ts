import { Component, OnInit, Input,  } from '@angular/core';
import { Step } from '../../classes/step';


@Component({
  selector: 'form-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})

export class SummaryComponent implements OnInit {
  @Input() payLoad: any = {};
  @Input() steps: Step[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleChanges(event) {
    console.log(event)
  }

}
