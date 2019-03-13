import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CompetitionService, Competition } from './../../services/competition.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionComponent implements OnInit {

  public competition$: Observable<Competition>;

  constructor(
    private route: ActivatedRoute,
    private service: CompetitionService
  ) {}

  ngOnInit() {
    this.competition$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const competition = this.service.getCompetition(Number(params.get('id')));
          return of(competition);
        }
      ));
  }
}
