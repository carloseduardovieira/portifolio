import { MatButtonModule } from '@angular/material/button';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { SpacingTokensComponent } from '../components';

export default {
  title: 'DESIGN TOKEN/Spacing Tokens',
  component: SpacingTokensComponent,
  parameters: {
    options: {
      showPanel: false, // Hide the addon panel for this specific story
      isToolshown: false, // Hide toolbars for this specific story
    },
    sidebar: {
      showRoots: false,
    },
    layout: 'centered', // Optional: Center the story layout
    previewTabs: {
      'storybook/docs/panel': { hidden: true }, // Hide docs preview tab
    },
  },
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
} as Meta<SpacingTokensComponent>;

const SpacingTokensTemplate: StoryFn<SpacingTokensComponent> = (
  args: SpacingTokensComponent
) => ({
  props: args,
});

export const SpacingTokensDefault = SpacingTokensTemplate.bind({});
SpacingTokensDefault.args = {};
