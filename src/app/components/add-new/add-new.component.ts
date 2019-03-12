import { Component, ChangeDetectionStrategy} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompetitionService } from './../../services/competition.service';
import { uniqueTitleValidator } from './../../shared/unique-title.validator';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
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
    if (this.competitionForm.valid) {
      this.competitionService.addCompetition(
        this.competitionForm.get('title').value
      );
      this.competitionForm.reset();
    }
  }
}
