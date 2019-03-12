import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionService } from './services/competition.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { CompetitionsListComponent } from './components/competitions-list/competitions-list.component';
import { CompetitionListItemComponent } from './components/competition-list-item/competition-list-item.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'competitions', component: CompetitionsListComponent },
  { path: 'competition/:id', component: CompetitionComponent },
  { path: '',
    redirectTo: '/competitions',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule ,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewComponent,
    PageNotFoundComponent,
    CompetitionComponent,
    CompetitionsListComponent,
    CompetitionListItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CompetitionService]
})

export class AppModule { }
