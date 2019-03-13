import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { CompetitionsListComponent } from './containers/competitions-list/competitions-list.component';
import { CompetitionComponent } from './containers/competition/competition.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { CompetitionListItemComponent } from './components/competition-list-item/competition-list-item.component';

import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './common/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DebugElement } from '@angular/core';

describe( 'AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

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
  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [
        AppComponent,
        CompetitionsListComponent,
        CompetitionListItemComponent,
        CompetitionComponent,
        PageNotFoundComponent,
        AddNewComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
          routes
        )
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    } ).compileComponents();
  } );

  beforeEach( async () => {
    fixture = TestBed.createComponent( AppComponent );
    component = fixture.componentInstance;
    el = fixture.debugElement;
  } );

  it( `should render the header`, () => {
    const header = el.queryAll(By.css('header'));
    expect(header.length).toEqual(1);
  } );
} );
