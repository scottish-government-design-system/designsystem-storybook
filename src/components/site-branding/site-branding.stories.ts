import type { Meta, StoryObj } from '@storybook/html';

// @ts-expect-error no type defs
import ComponentTemplate from './site-branding.njk';

export type SiteBrandingArgs = {
    hasLogo?: boolean
    siteTitle?: string
};

const meta: Meta<SiteBrandingArgs> = {
    title: 'Components/Site branding',
    tags: ['autodocs'],
    render: (args) => {
        return(ComponentTemplate(args))
    },
    args: {
        hasLogo: true,
        siteTitle: 'Design System'
    }
};

export default meta;
type Story = StoryObj<SiteBrandingArgs>;

export const Default: Story = {};

export const TwoLineTitle: Story = {
    name: 'Two line title',
    args: {
        siteTitle: 'Scottish Government<br>Design System'
    }
};
