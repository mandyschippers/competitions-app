import { Component, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompetitionService } from './../../services/competition.service';
import { uniqueTitleValidator } from './../../common/unique-title.validator';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewComponent {

  competitionForm: FormGroup;

  constructor(
    private competitionService: CompetitionService
  ) {
    this.competitionForm = new FormGroup({
      title: new FormControl(
        '', {
          validators: [
            Validators.required,
            uniqueTitleValidator(this.competitionService)
          ],
          updateOn: 'blur'
        }
      )
    });
   }

  addCompetition() {
    const titleField = this.competitionForm.get('title');
    if ( titleField.value === '') {
      titleField.markAsTouched();
    }
    if (this.competitionForm.valid) {
      this.competitionService.addCompetition(
        titleField.value
      );
      this.competitionForm.reset();
    }
  }
}
