import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { TuiCheckbox } from '@taiga-ui/kit';

@Component({
  selector: 'app-checkbox-form',
  imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiCheckbox],
  templateUrl: './checkbox-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFormComponent {
  protected readonly questionTitles = [
    'What framework do you like?',
    'What library do you like?',
  ];

  protected readonly questions = [
    ['Angular', 'React', 'Vue'],
    ['Taiga UI', 'Material UI', 'PrimeNG'],
  ];

  protected currentQuestion = 0;

  protected results: boolean[][] = [];

  protected form = new FormGroup({
    0: new FormControl(false),
    1: new FormControl(false),
    2: new FormControl(false),
  });

  protected nextQuestion(): void {
    this.currentQuestion++;

    this.results.push(Object.values(this.form.value).map(Boolean));

    this.form = new FormGroup({
      0: new FormControl(false),
      1: new FormControl(false),
      2: new FormControl(false),
    });
  }
}
