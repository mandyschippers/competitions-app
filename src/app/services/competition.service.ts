import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Competition {
  id: number;
  title: string;
}


const COMPETITIONS_URL = '/db/competitions.json';

@Injectable()
export class CompetitionService {

  private competitionsSubject = new BehaviorSubject<Competition[]>([]);
  competitions$ = this.competitionsSubject.asObservable();

  constructor(
    private http: HttpClient
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
    return this.http.get<Competition[]>( COMPETITIONS_URL );
  }

}
