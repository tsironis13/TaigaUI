import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAccordion } from '@taiga-ui/experimental';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

interface Operation {
  title: string;
  subtitle?: string;
  sum?: number;
  time?: string;
}
@Component({
  selector: 'app-custom',
  imports: [
    AsyncPipe,
    KeyValuePipe,
    TuiAccordion,
    TuiAmountPipe,
    TuiAvatar,
    TuiButton,
    TuiCell,
    TuiTitle,
  ],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {
  protected readonly operations = {
    Today: [],
    Yesterday: [
      {
        title: 'Cashback',
        subtitle: 'Pot of gold',
        sum: 237,
        time: '19:32',
      },
      {
        title: 'Failed to load',
      },
    ],
    'January 6, 2021': [
      {
        title: 'Salary',
        subtitle: 'Account number ••••237',
        sum: 43256,
        time: '11:02',
      },
      {
        title: 'Shaman Hat',
        subtitle: 'Insurrection Apparel',
        sum: -99,
        time: '09:11',
      },
      {
        title: 'Shaman Makeup',
        subtitle: 'Insurrection Apparel',
        sum: -75,
        time: '09:11',
      },
    ],
  };

  protected getIcon(operation: Operation): string {
    if (!operation.sum) {
      return '@tui.triangle-alert';
    }

    return operation.sum > 0 ? '@tui.thumbs-up' : '@tui.thumbs-down';
  }

  protected sum(operations: readonly Operation[]): number {
    return operations.reduce((acc, { sum }) => acc + (sum || 0), 0);
  }

  protected orderBy(): number {
    return 0;
  }
}
