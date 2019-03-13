import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Competition, CompetitionService } from './../services/competition.service';


export function uniqueTitleValidator( competitionsService: CompetitionService ): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {

    const matching = competitionsService.getCompetitions()
      .filter( competition => competition.title === control.value);

    return matching.length ? { uniqueTitle: { value: control.value } } : null;
  };
}

