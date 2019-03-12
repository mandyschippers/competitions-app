import { Component, Input } from '@angular/core';
import { Competition } from './../../services/competition.service';

@Component({
  selector: 'app-competition-list-item',
  templateUrl: './competition-list-item.component.html',
  styleUrls: ['./competition-list-item.component.css']
})
export class CompetitionListItemComponent {
   @Input() competition: Competition;

  constructor(
  ) {}
}
