import { ComponentStructure } from './app.config';
import { LoaderBackgroundComponent } from './components/ui/loader/loader-background/loader-background.component';
import { LoaderCustomWidthComponent } from './components/ui/loader/loader-custom-width/loader-custom-width.component';
import { LoaderOptionsComponent } from './components/ui/loader/loader-options/loader-options.component';
import { LoaderOverlayComponent } from './components/ui/loader/loader-overlay/loader-overlay.component';
import { LoadingButtonComponent } from './components/ui/loader/loading-button/loading-button.component';

export const loaderComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Loaders',
    title: 'Loader',
    description: 'Loading button',
    url: 'https://taiga-ui.dev/components/loader#button',
    component: LoadingButtonComponent,
  },
  {
    label: 'Loaders',
    title: 'Loader background',
    description: 'Loader with inherited background color',
    url: 'https://taiga-ui.dev/components/loader#inherit-color',
    component: LoaderBackgroundComponent,
  },
  {
    label: 'Loaders',
    title: 'Loader with content overlay',
    description: 'User can set content as overlay',
    url: 'https://taiga-ui.dev/components/loader#overlay',
    component: LoaderOverlayComponent,
  },
  {
    label: 'Loaders',
    title: 'Loader options',
    description: 'Options',
    url: 'https://taiga-ui.dev/components/loader#options',
    component: LoaderOptionsComponent,
  },
  {
    label: 'Loaders',
    title: 'Loader custom width',
    description: 'User can customize stroke width',
    url: 'https://taiga-ui.dev/components/loader#stroke-width',
    component: LoaderCustomWidthComponent,
  },
];
