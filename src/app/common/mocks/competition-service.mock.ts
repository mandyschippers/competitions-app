import { BehaviorSubject, Observable, of } from 'rxjs';
import { COMPETITION_LIST } from 'src/app/containers/competitions-list/competition-list.component.spec.mock';
import { Competition } from 'src/app/models/competition.model';

export class MockCompetitionService {

  private competitionsSubject = new BehaviorSubject<Competition[]>([]);
  competitions$ = this.competitionsSubject.asObservable();

  constructor(
  ) {
    this.fetchCompetitions()
      .subscribe(competitions => {
        this.competitionsSubject.next( competitions );
      });
  }

  addCompetition( title: string ): void {
    const competitions = [
      ...this.competitionsSubject.value,
      {
        id: this.competitionsSubject.value.length + 1,
        title
      }
    ];
    this.competitionsSubject.next(competitions);
  }

  getCompetitions(): Competition[] {
    return this.competitionsSubject.value;
  }

  getCompetition(id: number): Competition {
    const competitions = this.competitionsSubject.value;
    return competitions.filter( competition => competition.id === id )[0];
  }

  fetchCompetitions(): Observable<Competition[]> {
    return of(COMPETITION_LIST);
  }

}
