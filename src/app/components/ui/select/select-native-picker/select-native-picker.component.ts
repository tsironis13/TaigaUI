import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { TuiBooleanHandler, TuiStringHandler } from '@taiga-ui/cdk';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';

interface Character {
  id: number;
  name: string;
}

@Component({
  selector: 'app-select-native-picker',
  imports: [
    ReactiveFormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './select-native-picker.component.html',
  styleUrl: './select-native-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectNativePickerComponent {
  protected readonly isMobile = inject(TUI_IS_MOBILE);
  protected readonly control = new FormControl(null);
  protected items: readonly Character[] = [
    { name: 'Luke Skywalker', id: 1 },
    { name: 'Leia Organa Solo', id: 2 },
    { name: 'Darth Vader', id: 3 },
    { name: 'Han Solo', id: 4 },
    { name: 'Obi-Wan Kenobi', id: 5 },
    { name: 'Yoda', id: 6 },
  ];

  protected stringify: TuiStringHandler<Character> = (item) => item.name;
  protected readonly disabledItemHandler: TuiBooleanHandler<Character> = (
    item
  ) => item.name === 'Darth Vader';
}
