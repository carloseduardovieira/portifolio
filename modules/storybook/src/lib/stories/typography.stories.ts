import { MatButtonModule } from '@angular/material/button';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { TypographyTablePreviewComponent } from '../components';

export default {
  title: 'DESIGN SYSTEM/Typography Tokens',
  component: TypographyTablePreviewComponent,
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
        TypographyTablePreviewComponent,
      ],
      providers: [provideAnimations()],
    }),
  ],
} as Meta<TypographyTablePreviewComponent>;

const TypographyTokenTablePreview: StoryFn<TypographyTablePreviewComponent> = (
  args: TypographyTablePreviewComponent
) => ({
  props: args,
});

export const typographyTokens = TypographyTokenTablePreview.bind({});
typographyTokens.args = {
  title: 'Headings',
  tokenList: [
    {
      name: 'Heading',
      fontFamily: 'Inter, serif',
      fontSize: '24px',
      fontWeight: '800',
      rem: '1.5rem',
      sampleText: 'Lorem ipsun dolor asimet consectum valasis abalabian',
    },
    {
      name: 'Heading 2',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fontWeight: '500',
      rem: '1rem',
      sampleText: 'Lorem ipsun dolor asimet consectum valasis abalabian',
    },
  ],
};
