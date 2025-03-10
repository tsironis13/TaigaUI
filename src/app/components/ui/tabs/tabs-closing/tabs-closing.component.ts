import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiIcon,
  TuiNumberFormat,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiInputNumber, TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-closing',
  imports: [
    FormsModule,
    TuiButton,
    TuiIcon,
    TuiInputNumber,
    TuiNumberFormat,
    TuiTabs,
    TuiTextfield,
  ],
  templateUrl: './tabs-closing.component.html',
  styleUrl: './tabs-closing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsClosingComponent {
  protected open = false;
  protected activeItemIndex = 0;

  protected items = Array.from({ length: 5 }, (_, i) => `Item #${i}`);

  protected add(): void {
    this.items = this.items.concat(`Item #${Date.now()}`);
  }

  protected remove(removed: string): void {
    const index = this.items.indexOf(removed);

    this.items = this.items.filter((item) => item !== removed);

    if (index <= this.activeItemIndex) {
      this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
    }
  }
}
