import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ColorTokensComponent } from '../components';

export default {
  title: 'Color Tokens',
  component: ColorTokensComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserAnimationsModule, MatButtonModule, ColorTokensComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<ColorTokensComponent> = (
  args: ColorTokensComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
