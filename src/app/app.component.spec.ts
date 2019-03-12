import { HeaderComponent } from './header.component';
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { CompetitionsListComponent } from './components/competitions-list/competitions-list.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { CompetitionListItemComponent } from './components/competition-list-item/competition-list-item.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

describe('AppComponent', () => {
    const routes: Routes = [
        { path: 'competitions', component: CompetitionsListComponent },
        { path: 'competition/:id', component: CompetitionComponent },
        { path: '',
          redirectTo: '/competitions',
          pathMatch: 'full'
        },
        { path: '**', component: PageNotFoundComponent }
    ];
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                CompetitionsListComponent,
                CompetitionListItemComponent,
                CompetitionComponent,
                PageNotFoundComponent,
                HeaderComponent,
                AddNewComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                FlexLayoutModule,
                MaterialModule ,
                BrowserAnimationsModule,
                RouterModule.forRoot(
                  routes
                )
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    });

    it(`should have as title 'Welcome!'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Welcome!');
    });
});
