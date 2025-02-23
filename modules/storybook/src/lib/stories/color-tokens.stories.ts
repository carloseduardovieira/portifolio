import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ColorTokensComponent } from '../components';

export default {
  title: 'DESIGN SYSTEM / Color Tokens',
  component: ColorTokensComponent,
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
      imports: [BrowserAnimationsModule, MatButtonModule, ColorTokensComponent],
    }),
  ],
} as Meta;

const ColorTokensTemplate: StoryFn<ColorTokensComponent> = (
  args: ColorTokensComponent
) => ({
  props: args,
});

export const ColorTokensDefault = ColorTokensTemplate.bind({});
