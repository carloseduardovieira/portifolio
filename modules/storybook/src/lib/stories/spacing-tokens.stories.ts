import { MatButtonModule } from '@angular/material/button';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { SpacingTokensComponent } from '../components';

export default {
  title: 'Spacing Tokens',
  component: SpacingTokensComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        SpacingTokensComponent,
      ],
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

const SpacingTokensTemplate: StoryFn<SpacingTokensComponent> = (
  args: SpacingTokensComponent
) => ({
  props: args,
});

export const SpacingTokensDefault = SpacingTokensTemplate.bind({});
SpacingTokensDefault.args = {};
