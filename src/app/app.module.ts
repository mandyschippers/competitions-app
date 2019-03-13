import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './common/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { CompetitionComponent } from './containers/competition/competition.component';
import { CompetitionsListComponent } from './containers/competitions-list/competitions-list.component';

import { AppComponent } from './app.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { CompetitionListItemComponent } from './components/competition-list-item/competition-list-item.component';

import { CompetitionService } from './services/competition.service';

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

@NgModule( {
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  declarations: [
    AppComponent,
    AddNewComponent,
    PageNotFoundComponent,
    CompetitionComponent,
    CompetitionsListComponent,
    CompetitionListItemComponent ],
  bootstrap: [ AppComponent ],
  providers: [  ]
} )

export class AppModule { }
