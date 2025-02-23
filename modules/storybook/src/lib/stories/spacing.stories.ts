import { MatButtonModule } from '@angular/material/button';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { TokenTablePreviewComponent } from '../components';

export default {
  title: 'DESIGN SYSTEM/Spacing Tokens',
  component: TokenTablePreviewComponent,
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
        TokenTablePreviewComponent,
      ],
      providers: [provideAnimations()],
    }),
  ],
} as Meta<TokenTablePreviewComponent>;

const TokenTablePreview: StoryFn<TokenTablePreviewComponent> = (
  args: TokenTablePreviewComponent
) => ({
  props: args,
});

export const paddingTokens = TokenTablePreview.bind({});
paddingTokens.args = {
  title: 'Padding',
  tokenList: [
    {
      name: 'Padding Extra Small',
      value: '4px',
      rem: '0.25rem',
    },
    { name: 'Padding Small', value: '8px', rem: '0.5rem' },
    {
      name: 'Padding Medium Small',
      value: '12px',
      rem: '0.75rem',
    },
    { name: 'Padding Medium', value: '16px', rem: '1rem' },
    {
      name: 'Padding Large Medium',
      value: '20px',
      rem: '1.25rem',
    },
    { name: 'Padding Large', value: '24px', rem: '1.5rem' },
    {
      name: 'Padding Extra Large',
      value: '28px',
      rem: '1.75rem',
    },
    {
      name: 'Padding Double Extra Large',
      value: '32px',
      rem: '2rem',
    },
  ],
};

export const marginTokens = TokenTablePreview.bind({});
marginTokens.args = {
  title: 'Margin',
  tokenList: [
    {
      name: 'Margin Extra Small',
      value: '4px',
      rem: '0.25rem',
    },
    { name: 'Margin Small', value: '8px', rem: '0.5rem' },
    {
      name: 'Margin Medium Small',
      value: '12px',
      rem: '0.75rem',
    },
    { name: 'Margin Medium', value: '16px', rem: '1rem' },
    {
      name: 'Margin Large Medium',
      value: '20px',
      rem: '1.25rem',
    },
    { name: 'Margin Large', value: '24px', rem: '1.5rem' },
    {
      name: 'Margin Extra Large',
      value: '28px',
      rem: '1.75rem',
    },
    {
      name: 'Margin Double Extra Large',
      value: '32px',
      rem: '2rem',
    },
  ],
};
