import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  tuiCreateLuhnValidator,
  TuiInputCard,
  TuiInputCVC,
  TuiInputExpire,
} from '@taiga-ui/addon-commerce';
import {
  TuiAlertService,
  TuiError,
  TuiTextfield,
  tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';

@Component({
  selector: 'app-inputcard-form',
  imports: [
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    TuiError,
    TuiFieldErrorPipe,
    TuiInputCard,
    TuiInputCVC,
    TuiInputExpire,
    TuiTextfield,
  ],
  templateUrl: './inputcard-form.component.html',
  styleUrl: './inputcard-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiTextfieldOptionsProvider({ cleaner: signal(true) })],
})
export class InputcardFormComponent {
  private readonly alerts = inject(TuiAlertService);

  protected readonly form = new FormGroup({
    card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),
    expire: new FormControl(''),
    cvc: new FormControl(''),
  });

  protected get card(): string | null {
    const value: string | null | undefined = this.form.get('card')?.value;

    if ((value?.length ?? 0) < 7) {
      return null;
    }

    switch (value?.charAt(0)) {
      case '0':
      case '1':
      case '2':
        return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';
      case '3':
      case '4':
      case '5':
        return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';
      case '6':
      case '7':
        return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';
      case '8':
      case '9':
      default:
        return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';
    }
  }

  protected onBinChange(bin: string | null): void {
    this.alerts.open(String(bin), { label: '(binChange)' }).subscribe();
  }
}
