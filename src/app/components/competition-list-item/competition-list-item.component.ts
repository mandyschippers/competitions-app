import { Component, Input } from '@angular/core';
import { Competition } from 'src/app/models/competition.model';

@Component({
  selector: 'app-competition-list-item',
  templateUrl: './competition-list-item.component.html',
  styleUrls: ['./competition-list-item.component.scss']
})
export class CompetitionListItemComponent {
   @Input() competition: Competition;

  constructor(
  ) {}
}
