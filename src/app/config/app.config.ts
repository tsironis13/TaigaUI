import { Type } from '@angular/core';
import { badgeComponents } from './badge-components.config';
import { buttonComponents } from './button-components.config';
import { linkComponents } from './link-components.config';
import { iconComponents } from './icon-components.config';

export type ComponentStructure = {
  id: number;
  label: string;
  title: string;
  description: string;
  url: string;
  component: Type<unknown>;
};

const components: Omit<ComponentStructure, 'id'>[] = [
  ...buttonComponents,
  ...linkComponents,
  ...iconComponents,
  ...badgeComponents,
];

// compute id to avoid error
const componentsWithIds: ComponentStructure[] = components.map((c, idx) => ({
  ...c,
  id: idx + 1,
}));

export const AppConfig = {
  components: componentsWithIds,
  componentTypeFilter: {
    label: 'Component type',
    placeHolder: 'Component type',
    items: componentsWithIds.map(({ id, label }) => ({ id, label })),
  },
};
