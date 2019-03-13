import { TestBed, ComponentFixture } from '@angular/core/testing';


import { CompetitionService } from './../../services/competition.service';

import { CompetitionsListComponent } from './competitions-list.component';
import { AddNewComponent } from './../../components/add-new/add-new.component';
import { CompetitionComponent } from './../../containers/competition/competition.component';
import { CompetitionListItemComponent } from './../../components/competition-list-item/competition-list-item.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../common/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MockCompetitionService } from 'src/app/common/mocks/competition-service.mock';

describe( 'CompetitionsListComponent', () => {

  let component: CompetitionsListComponent;
  let fixture: ComponentFixture<CompetitionsListComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [
        CompetitionsListComponent,
        CompetitionListItemComponent,
        AddNewComponent,
        CompetitionComponent,
        PageNotFoundComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          []
        )
      ],
      providers: [
        { provide: CompetitionService, useClass: MockCompetitionService }
      ]
    } ).compileComponents();
  } );

  beforeEach( async () => {
    fixture = TestBed.createComponent( CompetitionsListComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  describe( 'component creation', () => {
    let listItems: HTMLElement[];

    it('should fetch competitions and render the same amount of list items', (done: DoneFn) => {

      component.competitions$.subscribe( competitions => {
        listItems = fixture.nativeElement.querySelectorAll('mat-list-item');
        expect(competitions.length).toEqual(listItems.length);
        done();
      });
    });

    // it('when I click a competition I should catch a click event', (done: DoneFn) => {
    //   const listItem = listItems[0];
    //   listItem.dispatchEvent(new Event('click'));
    //   fixture.detectChanges();

    //   // test if route is actived. To do...
    // });
  });

});


