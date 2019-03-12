import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject  } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CompetitionService, Competition } from './services/competition.service';
import { AddNewComponent } from './components/add-new/add-new.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Welcome!';

  constructor() {}

}
