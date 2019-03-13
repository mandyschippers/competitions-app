import { Component } from '@angular/core';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompetitionService } from './../../services/competition.service';
import { Competition } from 'src/app/models/competition.model';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.scss']
})
export class CompetitionsListComponent {

  competitions: Competition[];
  competitions$: Observable<Competition[]>;
  // onDestroy = new Subject();

  constructor(
    public competitionService: CompetitionService
  ) {
    this.competitions$ = competitionService.competitions$
      .pipe(
        map(competitions => {
          return competitions.map(competition => {
              return {
                ...competition,
                title: `${competition.id} - ${competition.title}`
              };
            }
          );
        }
      )
    );
   }

  /* I use this to remove subcriptions onDestroy (using `takeUntil`) if I don't use async pipe in template */
  //  ngOnDestroy() {
  //    this.onDestroy.next();
  //    this.onDestroy.complete();
  //  }
}
