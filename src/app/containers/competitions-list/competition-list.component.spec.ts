import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { BehaviorSubject, of } from 'rxjs';
import { CompetitionService, Competition } from './../../services/competition.service';

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
import { RouterModule, Routes } from '@angular/router';
import { COMPETITION_LIST } from './competition-list.component.spec.mock';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';


fdescribe( 'CompetitionsListComponent', () => {

  const routes: Routes = [
    { path: 'competitions', component: CompetitionsListComponent },
    { path: 'competition/:id', component: CompetitionComponent },
    {
      path: '',
      redirectTo: '/competitions',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];

  const competitionService = jasmine.createSpyObj('CompetitionService', ['fetchCompetitions']);
  const fetchCompetitionsSpy = competitionService.fetchCompetitions.and.returnValue(of(COMPETITION_LIST));

  let component: CompetitionsListComponent;
  let fixture: ComponentFixture<CompetitionsListComponent>;
  let el: DebugElement;

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
          routes
        )
      ],
      providers: [
        // CompetitionService
        { provide: competitionService, useValue: competitionService }
      ]
    } ).compileComponents().then( () => {
      fixture = TestBed.createComponent( CompetitionsListComponent );
      component = fixture.componentInstance;
      // spyOn( component.competitionService, 'fetchCompetitions' ).and.returnValue( of( COMPETITION_LIST ) );
    } );
  } );

  beforeEach( async () => {
    fixture = TestBed.createComponent( CompetitionsListComponent );
    component = fixture.componentInstance;
    el = fixture.debugElement;
  } );

  describe( 'component creation', () => {
    it( 'should call getCompetitions once22', () => {
      component.competitions$.subscribe( val => console.log( val ) );
      // fixture.detectChanges();
      expect( 1 ).toBe( 1 );
    } );
  } );

  afterEach( () => {
    // getCompetitionsSpy.calls.reset();
  } );

} );


